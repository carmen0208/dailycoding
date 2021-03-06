package com.carmen.learning.service;

import com.carmen.learning.model.Coffee;
import com.carmen.learning.money.MoneyDeserializer;
import com.carmen.learning.money.MoneySerializer;
import com.carmen.learning.repository.CoffeeRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.joda.JodaModule;
import lombok.extern.slf4j.Slf4j;
import org.joda.money.Money;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

import static org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers.exact;

@Slf4j
@Service
public class CoffeeService {
    private static final String CACHE = "springbucks-coffee";
    @Autowired
    private CoffeeRepository coffeeRepository;

//    @Autowired
//    private RedisTemplate<String, Coffee> redisTemplate;

    @Autowired
    @Qualifier("objectRedisTemplate")
    private RedisTemplate<String, Coffee> redisTemplate;

    public Optional<Coffee> findOneCoffee(String name) {
        HashOperations<String, String, Coffee> hashOperations = redisTemplate.opsForHash();
        if (redisTemplate.hasKey(CACHE) && hashOperations.hasKey(CACHE, name)) {
            log.info("Get coffee {} from Redis.", name);

            ObjectMapper mapper = getObjectMapper();
            Coffee coffee = mapper.convertValue(hashOperations.get(CACHE, name), new TypeReference<Coffee>() { });
            return Optional.of(coffee);
        }
        ExampleMatcher matcher = ExampleMatcher.matching()
            .withMatcher("name", exact().ignoreCase());
        Optional<Coffee> coffee = coffeeRepository.findOne(
            Example.of(Coffee.builder().name(name).build(), matcher));
        log.info("Coffee Found: {}", coffee);
        if (coffee.isPresent()) {
            log.info("Put coffee {} to Redis.", name);
            hashOperations.put(CACHE, name, coffee.get());
            redisTemplate.expire(CACHE, 1, TimeUnit.MINUTES);
        }

        ListOperations<String, Coffee> listOperations = redisTemplate.opsForList();
        listOperations.rightPush("CarmenCoffee", coffee.get());
        log.info("################# CarmenCoffee {}", redisTemplate.opsForList().range("CarmenCoffee", 0, -1));
        redisTemplate.expire("CarmenCoffee", 1, TimeUnit.MINUTES);
        redisTemplate.expire(CACHE, 1, TimeUnit.MINUTES);
        return coffee;
    }

    public ObjectMapper getObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        JodaModule module = new JodaModule();
        module.addSerializer(Money.class, new MoneySerializer());
        module.addDeserializer(Money.class, new MoneyDeserializer());
        mapper.registerModule(module);
        return mapper;
    }
}

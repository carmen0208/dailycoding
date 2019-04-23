package com.carmen.learning;

import com.carmen.learning.model.Coffee;
import com.carmen.learning.money.MoneyDeserializer;
import com.carmen.learning.money.MoneySerializer;
import com.carmen.learning.service.CoffeeService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.joda.JodaModule;
import io.lettuce.core.ReadFrom;
import lombok.extern.slf4j.Slf4j;
import org.joda.money.Money;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.redis.LettuceClientConfigurationBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.*;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.Optional;


@SpringBootApplication
@EnableJpaRepositories
@Slf4j
public class CoffeeShopApplication implements ApplicationRunner {

    @Autowired
    private CoffeeService coffeeService;

    public static void main(String[] args) {
        SpringApplication.run(CoffeeShopApplication.class, args);
    }

//	@Bean
//	public RedisTemplate<String, Coffee> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
//		RedisTemplate<String, Coffee> template = new RedisTemplate<>();
//		template.setConnectionFactory(redisConnectionFactory);
//        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Coffee.class);
//		ObjectMapper mapper = new ObjectMapper();
//		JodaModule module = new JodaModule();
//		module.addSerializer(Money.class, new MoneySerializer());
//		module.addDeserializer(Money.class, new MoneyDeserializer());
//		mapper.registerModule(module);
//        jackson2JsonRedisSerializer.setObjectMapper(mapper);
//		template.setKeySerializer(new StringRedisSerializer());
//		template.setValueSerializer(jackson2JsonRedisSerializer);
//		template.setHashKeySerializer(new StringRedisSerializer());
//		template.setHashValueSerializer(jackson2JsonRedisSerializer);
//		return template;
//	}

    @Bean("objectRedisTemplate")
    public <T> RedisTemplate<String, T> objectRedisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<String, T> redisTemplate = new RedisTemplate<>();

        redisTemplate.setConnectionFactory(redisConnectionFactory);

        // Set Serializer (Key is String and Value is Json)
        // Json not support Joda Money, need to write MoneySerializer myself
        RedisSerializer<String> serializer = new StringRedisSerializer();
        redisTemplate.setKeySerializer(serializer);
//        redisTemplate.setHashKeySerializer(serializer);

        ObjectMapper mapper = getObjectMapper();
        redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer(mapper));
        redisTemplate.setHashValueSerializer(new GenericJackson2JsonRedisSerializer(mapper));

        return redisTemplate;
    }

    public ObjectMapper getObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        JodaModule module = new JodaModule();
        module.addSerializer(Money.class, new MoneySerializer());
        module.addDeserializer(Money.class, new MoneyDeserializer());
        mapper.registerModule(module);
        return mapper;
    }

    @Bean
    public LettuceClientConfigurationBuilderCustomizer customizer() {
        return builder -> builder.readFrom(ReadFrom.MASTER_PREFERRED);
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Optional<Coffee> c = coffeeService.findOneCoffee("mocha");
        log.info("Coffee {}", c);

        for (int i = 0; i < 5; i++) {
            c = coffeeService.findOneCoffee("mocha");
        }

        log.info("Value from Redis: {}", c);
    }
}

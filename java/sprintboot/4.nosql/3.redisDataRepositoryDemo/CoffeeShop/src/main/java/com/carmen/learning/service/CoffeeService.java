package com.carmen.learning.service;

import com.carmen.learning.model.Coffee;
import com.carmen.learning.model.CoffeeCache;
import com.carmen.learning.repository.CoffeeCacheRepository;
import com.carmen.learning.repository.CoffeeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers.exact;

@Slf4j
@Service
public class CoffeeService {

    @Autowired
    private CoffeeCacheRepository coffeeCacheRepository;

    @Autowired
    private CoffeeRepository coffeeRepository;

    public Optional<Coffee> findOneCoffee(String name) {
        ExampleMatcher matcher = ExampleMatcher.matching()
            .withMatcher("name", exact().ignoreCase());
        Optional<Coffee> coffee = coffeeRepository.findOne(
            Example.of(Coffee.builder().name(name).build(), matcher));
        log.info("Coffee Found: {}", coffee);
        return coffee;
    }

    public Optional<Coffee> findSimpleCoffeeFromCache(String name) {
        Optional<CoffeeCache> cached = coffeeCacheRepository.findOneByName(name);
        if(cached.isPresent()) {
            CoffeeCache coffeeCache = cached.get();
            Coffee coffee = Coffee.builder()
                .name(coffeeCache.getName())
                .price(coffeeCache.getPrice())
                .build();
            log.info("Coffee {} found in cache.", coffeeCache);
            return Optional.of(coffee);
        } else {
            Optional<Coffee> raw = findOneCoffee(name);
            raw.ifPresent(c -> {
                CoffeeCache coffeeCache = CoffeeCache.builder()
                    .id(c.getId())
                    .name(c.getName())
                    .price(c.getPrice())
                    .build();
                log.info("Save Coffee {} to cache.", coffeeCache);
                coffeeCacheRepository.save(coffeeCache);
            });

            return raw;
        }
    }
}

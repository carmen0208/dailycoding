package com.carmen.learning.repository;

import com.carmen.learning.model.Coffee;
import com.carmen.learning.model.Customer;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.Map;


@Repository
public class CustomerRepositoryImpl implements CustomerRepository {

	private static final String KEY = "Customer";

	@Autowired
	@Qualifier("objectRedisTemplate")
	private RedisTemplate<String, Customer> redisTemplate;

	private HashOperations<String, Long, Customer> hashOperations;
	private ListOperations<String, Customer> listOperations;

//	@Autowired
//	public CustomerRepositoryImpl(RedisTemplate<String, Customer> redisTemplate) {
//		this.redisTemplate = redisTemplate;
//	}

	@PostConstruct
	private void init() {
		hashOperations = redisTemplate.opsForHash();
		listOperations = redisTemplate.opsForList();
	}

	@Override
	public void save(Customer customer) {
		hashOperations.put(KEY, customer.getId(), customer);
		String key = "Customer" + customer.getFirstName();
		listOperations.rightPush(key, customer);
	}

	@Override
	public Customer find(Long id) {
		return hashOperations.get(KEY, id);
	}

	@Override
	public Map<Long, Customer> findAll() {
		Map<Long, Customer> customer = new ObjectMapper().convertValue(hashOperations.entries(KEY), new TypeReference<Map<Long, Customer>>() { });
		return customer;


	}

	@Override
	public void update(Customer customer) {
		hashOperations.put(KEY, customer.getId(), customer);
	}

	@Override
	public void delete(Long id) {
		hashOperations.delete(KEY, id);
	}


	public ObjectMapper getObjectMapper() {
		ObjectMapper mapper = new ObjectMapper();
//		JodaModule module = new JodaModule();
//		module.addSerializer(Money.class, new MoneySerializer());
//		module.addDeserializer(Money.class, new MoneyDeserializer());
//		mapper.registerModule(module);
		return mapper;
	}
}

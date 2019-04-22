package com.carmen.learning.repository;

import com.carmen.learning.model.Coffee;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CoffeeRepository extends PagingAndSortingRepository<Coffee, Long> {
}

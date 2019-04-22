package com.carmen.learning.repository;

import com.carmen.learning.model.Coffee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoffeeRepository extends JpaRepository<Coffee, Long> {
}

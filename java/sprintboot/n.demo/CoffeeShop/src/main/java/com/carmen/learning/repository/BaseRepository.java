package com.carmen.learning.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface BaseRepository<T, Long> extends PagingAndSortingRepository<T, Long> {
}

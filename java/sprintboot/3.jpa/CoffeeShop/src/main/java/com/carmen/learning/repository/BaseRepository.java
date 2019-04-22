package com.carmen.learning.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface BaseRepository<T, Long> extends PagingAndSortingRepository<T, Long> {
    List<T> findTop3ByOrderByUpdateTimeDescIdAsc();
}

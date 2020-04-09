package com.carmen.dailydrip.async.completablefuture;

import java.util.concurrent.CompletableFuture;

public interface AccountService {
    CompletableFuture<Void> add(int account, int amount);
}

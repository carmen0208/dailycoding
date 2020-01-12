package com.carmen.dailydrip.async.completablefuture;

import java.util.concurrent.CompletableFuture;
import java.util.function.Supplier;

public class AccountServiceImpl implements AccountService {
    @Override
    public CompletableFuture<Void> add(int account, int amount) {
        CompletableFuture<Void> future = CompletableFuture.supplyAsync(new Supplier<Void>() {
            @Override
            public Void get() {
                try {
                    System.out.println(account + amount);
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                return null;
            }
        });
        return future;
    }
}

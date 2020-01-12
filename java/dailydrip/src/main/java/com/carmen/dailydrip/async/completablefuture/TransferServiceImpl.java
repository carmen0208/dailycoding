package com.carmen.dailydrip.async.completablefuture;

import java.util.concurrent.CompletableFuture;

public class TransferServiceImpl implements TransferService {

    AccountService accountService;
    public TransferServiceImpl() {
        accountService = new AccountServiceImpl();
    }

    @Override
    public CompletableFuture<Void> transfer(int fromAccount, int toAccount, int amount) {
        return accountService.add(fromAccount, -1*amount)
                .thenCompose(v -> accountService.add(toAccount, amount));
    }
}


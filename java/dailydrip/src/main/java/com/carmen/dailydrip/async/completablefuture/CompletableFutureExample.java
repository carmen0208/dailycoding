package com.carmen.dailydrip.async.completablefuture;


import org.junit.Test;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

public class CompletableFutureExample {
    private TransferService transferService;
//    public CompletableFutureExample() {
//
//    }
    private final static int A = 1000;
    private final static int B = 1000;
    @Test
    public void syncInvoke() throws ExecutionException, InterruptedException {
        transferService = new TransferServiceImpl();
        // 同步调用
        transferService.transfer(A, B, 100).get();
        System.out.println("转账完成！");
    }

    @Test
    public void asyncInvoke() throws IOException {
        // 异步调用
        transferService = new TransferServiceImpl();
        transferService.transfer(A, B, 100)
                .thenRun(() -> System.out.println("转账完成！"));

        System.in.read();
    }
}

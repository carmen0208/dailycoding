package com.carmen.dailydrip.async;


import org.junit.Test;
import org.springframework.scheduling.annotation.Async;

import java.beans.Transient;
import java.util.concurrent.*;
import java.util.function.Supplier;

public class ThreadAsync {
    @Test
    public void threadAsync() throws Exception {
        System.out.println("Main Start");
        Thread thread=new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("===Task start===");
                try {

                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("===Task finish===");
            }
        });
        thread.start();
        System.out.println("Main finished");
        System.in.read();
    }

    @Test
    public void futureAsync() throws Exception {
        System.out.println("Main Start");
        ExecutorService executor = Executors.newFixedThreadPool(1);
        Future<Integer> future = executor.submit(new Callable<Integer>() {
            @Override
            public Integer call() throws Exception {
                System.out.println("===Task start===");
                Thread.sleep(4000);
                System.out.println("===Task finish===");
                return 3;
            }
        });

        //这里需要返回值时会阻塞主线程，如果不需要返回值使用是OK的。倒也还能接收
        //使用起来却着实有点鸡肋，并不能实现真正意义上的异步，获取结果时需要阻塞线程，或者不断轮询
//        Integer result = future.get();
//        System.out.println(result);
        System.out.println("Main finished");
        System.in.read();
    }

    @Test
    public void completableFutureAsync() throws Exception {
        System.out.println("Main Start");
        ExecutorService executor = Executors.newFixedThreadPool(2);
        CompletableFuture<Integer> future = CompletableFuture.supplyAsync(new Supplier<Integer>() {
            @Override
            public Integer get() {
                System.out.println("===Task start===");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("===Task finish===");
                return 3;
            }
        }, executor);
        future.thenAccept(e -> System.out.println(e));

        System.out.println("Main finished");
        System.in.read();
    }
}

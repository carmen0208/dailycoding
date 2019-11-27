package com.carmen.kafka.tutorial1;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.errors.WakeupException;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Duration;
import java.util.Arrays;
import java.util.Properties;
import java.util.concurrent.CountDownLatch;

public class ConsumerDemoThreads {
    public static void main(String[] args) {
        new ConsumerDemoThreads().run();
    }

    private ConsumerDemoThreads() {

    }

    private void run() {
        Logger logger = LoggerFactory.getLogger(ConsumerDemoThreads.class.getName());
        String bootStrapServers = "127.0.0.1:9092";
        String groupId = "my-sixth-application";
        String topic = "first_topic";

        // latch for dealing with multiple threads
        CountDownLatch latch = new CountDownLatch(1);

        // create the consumer runnable
        logger.info("Creating the consumer thread");
        Runnable myConsumerRunnable = new ConsumerRunable(
                bootStrapServers,
                groupId,
                topic,
                latch
        );

        // start the thread
        Thread myThread = new Thread(myConsumerRunnable);
        myThread.start();

        // add a shutdown hook
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            logger.info("Caught shutdown hook");
            ((ConsumerRunable)myConsumerRunnable).shutdown();
            try {
                latch.await();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            logger.info("Application has exited");
        }));



        // get latch for thread to shuted down
        try {
            latch.await();
        } catch (InterruptedException e) {
            logger.error("Application got interrupted", e);
        } finally {
            logger.info("Application is closing");
        }
    }

    public class ConsumerRunable implements Runnable {
        private CountDownLatch latch;
        private KafkaConsumer<String, String> consumer;
        private Logger logger = LoggerFactory.getLogger(ConsumerRunable.class.getName());

        public ConsumerRunable(String bootstrapServers,
                               String groupId,
                               String topic,
                               CountDownLatch latch) {
            this.latch = latch;
            // create consumer configs
            Properties properties = new Properties();
            properties.setProperty(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
            properties.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
            properties.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
            properties.setProperty(ConsumerConfig.GROUP_ID_CONFIG, groupId);
            properties.setProperty(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");

            consumer = new KafkaConsumer<String, String>(properties);

            consumer.subscribe(Arrays.asList(topic));
        }

        @Override
        public void run() {
            try {
                while(true) {
                    ConsumerRecords<String, String> records =
                            consumer.poll(Duration.ofMillis(100));
                    for(ConsumerRecord<String, String> record: records) {
                        logger.info("Key: " + record.key() + ", Value: " + record.value());
                        logger.info("Partition: " + record.partition() + ", Offset:" + record.offset());
                    }
                }
            } catch (WakeupException e) {
                logger.info("Received shutdown signal!");
            } finally {
                consumer.close();
                // tell our main code we're done with the consumer
                latch.countDown();
            }

        }

        public void shutdown() {
            // the wakeup() method is a special method to interrupt consumer.poll()
            // it will throw the exception WakeUpException
            consumer.wakeup();
        }
    }
}
//[Thread-2] INFO com.carmen.kafka.tutorial1.ConsumerDemoThreads - Caught shutdown hook
//[Thread-1] INFO com.carmen.kafka.tutorial1.ConsumerDemoThreads$ConsumerRunable - Received shutdown signal!
//[Thread-1] INFO org.apache.kafka.clients.consumer.internals.AbstractCoordinator - [Consumer clientId=consumer-1, groupId=my-sixth-application] Member consumer-1-c9f9b036-9bae-4517-a3e9-7b88cf24f302 sending LeaveGroup request to coordinator carmens-mbp.fritz.box:9092 (id: 2147483647 rack: null)
//[main] INFO com.carmen.kafka.tutorial1.ConsumerDemoThreads - Application is closing
//[Thread-2] INFO com.carmen.kafka.tutorial1.ConsumerDemoThreads - Application has exited
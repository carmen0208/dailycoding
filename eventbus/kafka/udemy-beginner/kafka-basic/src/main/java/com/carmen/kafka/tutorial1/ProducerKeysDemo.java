package com.carmen.kafka.tutorial1;

import org.apache.kafka.clients.producer.*;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;
import java.util.concurrent.ExecutionException;

public class ProducerKeysDemo {
    public static void main(String[] args) throws ExecutionException, InterruptedException {

        final Logger logger = LoggerFactory.getLogger(ProducerKeysDemo.class);

        String bootstrapServers = "127.0.0.1:9092";

        Properties properties = new Properties();
        properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        // create the producer
        KafkaProducer<String, String> producer = new KafkaProducer<String, String>(properties);

        // create a producer record
        for (int i=0; i<10; i++ ) {
            String message = "hello world" + Integer.toString(i);
            String key = "id_" + Integer.toString(i);
            ProducerRecord<String, String> record =
                    new ProducerRecord<String, String>("first_topic", key, message);
            logger.info("Key: " + key);
            // send data - asynchronous
            producer.send(record, new Callback() {
                public void onCompletion(RecordMetadata recordMetadata, Exception e) {
                if (e == null) {
                    logger.info("Received new metadata. \n" +
                        "Topic:" + recordMetadata.topic() + "\n" +
                        "Partition: " + recordMetadata.partition() + "\n" +
                        "Offset: " + recordMetadata.offset() + "\n" +
                        "Timestamp: " + recordMetadata.timestamp());
                    } else {
                        logger.error("Error while producing", e);
                    }
                }
            }).get(); // block the .send() to make it synchronous - don't do this in production!
        }
        // flush data(force producer to be produced)
        producer.flush();

        // flush and close producer
        producer.close();
    }
}

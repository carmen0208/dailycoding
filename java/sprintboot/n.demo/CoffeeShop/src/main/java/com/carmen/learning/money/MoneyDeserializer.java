package com.carmen.learning.money;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import org.joda.money.CurrencyUnit;
import org.joda.money.Money;

import java.io.IOException;

/**
 * Will deserialize a Money that was serialized with the MoneySerializer. Only pays attention to 'amount' and 'curency'.
 */
public class MoneyDeserializer extends StdDeserializer<Money> {

    /** */
    private static final long serialVersionUID = 1L;

    /** */
    public MoneyDeserializer() {
        super(Money.class);
    }

    /** */
    @Override
    public Money deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        JsonNode moneyTree = jp.readValueAsTree();
//        System.out.println("moneyTree :::::::::::::::::::::::::::");
//System.out.println(moneyTree);
        int amount = moneyTree.get("amount").asInt();

        JsonNode currencyNode = moneyTree.get("currency");
        CurrencyUnit currency = currencyNode == null ? CurrencyUnit.USD : CurrencyUnit.of(currencyNode.asText());

        return Money.ofMinor(currency, amount);
    }
}



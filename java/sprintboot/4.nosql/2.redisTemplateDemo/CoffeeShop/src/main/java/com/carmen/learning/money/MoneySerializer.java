package com.carmen.learning.money;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import org.joda.money.Money;

import java.io.IOException;

/**
 * Configuring this serializer will make Money objects render as a structure like this:
 * { amount: 2388, str: "23.88", pretty: "$23.88", symbol: "$", currency: "USD" }
 */
public class MoneySerializer extends JsonSerializer<Money> {

    @Override
    public void serialize(Money value, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {
        jgen.writeStartObject();
        {
            jgen.writeNumberField("amount", value.getAmountMinorInt());
            jgen.writeStringField("str", value.getAmount().toString());
            jgen.writeStringField("symbol", value.getCurrencyUnit().getSymbol());
            jgen.writeStringField("currency", value.getCurrencyUnit().getCode());

            String pretty = prettyPrintWithCents(value);
            jgen.writeStringField("pretty", pretty);
        }
        jgen.writeEndObject();
    }

    /**
     * Makes a nicely formatted version like $50.00 or $23.99.  Always shows cents.
     */
    private String prettyPrintWithCents(Money money) {
        StringBuilder bld = new StringBuilder(money.getCurrencyUnit().getSymbol());
        bld.append(money.getAmount().toPlainString());
        return bld.toString();
    }
}

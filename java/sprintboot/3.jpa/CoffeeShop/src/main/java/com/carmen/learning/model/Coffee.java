package com.carmen.learning.model;

import lombok.*;
import org.hibernate.annotations.Type;
import org.joda.money.Money;

import javax.persistence.*;

//@Data is a convenient shortcut annotation that bundles the features of @ToString,
// @EqualsAndHashCode, @Getter / @Setter and @RequiredArgsConstructor together
@Data
@ToString(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="T_COFFEE")
public class Coffee extends BaseEntity {

    private String name;
    @Type(type = "org.jadira.usertype.moneyandcurrency.joda.PersistentMoneyAmount",
        parameters = {@org.hibernate.annotations.Parameter(name = "currencyCode", value = "NZD")})
    private Money price;
}

package com.carmen.learning.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.UpdateTimestamp;
import org.joda.money.Money;

import javax.persistence.*;
import java.util.Date;

//@Data is a convenient shortcut annotation that bundles the features of @ToString,
// @EqualsAndHashCode, @Getter / @Setter and @RequiredArgsConstructor together
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="T_COFFEE")
public class Coffee {
    @Id
    @GeneratedValue
    private Long id;

    @Column(updatable = false)
    @CreationTimestamp
    private Date createTime;

    @UpdateTimestamp
    private Date updateTime;

    private String name;
    @Type(type = "org.jadira.usertype.moneyandcurrency.joda.PersistentMoneyAmount",
        parameters = {@org.hibernate.annotations.Parameter(name = "currencyCode", value = "NZD")})
    private Money price;
}

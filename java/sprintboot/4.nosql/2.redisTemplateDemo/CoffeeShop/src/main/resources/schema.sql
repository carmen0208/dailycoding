drop table t_coffee if exists;
drop table t_order if exists;
drop table t_order_coffee if exists;

create table t_coffee (
    id bigint auto_increment,
    create_time timestamp,
    update_time timestamp,
    name varchar(255),
    price bigint,
    primary key (id)
);

create table t_order (
    id bigint auto_increment,
    create_time timestamp,
    update_time timestamp,
    customer varchar(255),
    state integer not null,
    primary key (id)
);

create table t_order_coffee (
    coffee_order_id bigint not null,
    items_id bigint not null
);

insert into t_coffee (name, price, create_time, update_time) values ('espresso', 350, now(), now());
insert into t_coffee (name, price, create_time, update_time) values ('latte', 500, now(), now());
insert into t_coffee (name, price, create_time, update_time) values ('capuccino', 500, now(), now());
insert into t_coffee (name, price, create_time, update_time) values ('mocha', 600, now(), now());
insert into t_coffee (name, price, create_time, update_time) values ('macchiato', 600, now(), now());

create database fastdelivery;


create table admin(
    id serial primary key,
    name varchar(64) not null,
    password varchar(60) not null,
    status varchar(64) not null default 'active',
);

create table users (
    id serial primary key,
    name varchar(64) not null,
    phone varchar(12) not null,
    status varchar(64) not null default 'active',
    status_bot smallint default 1,
    user_telegram_id bigint
);

create table categories (
    id serial primary key,
    name varchar(128) not null,
    status varchar(64) not null default 'active' 
);

create table sub_categories  (
    id serial primary key,
    category_id int not null references categories(id),    
    name varchar(128) not null,
    status varchar(64) not null default 'active' 
);

create table product_category(
    id serial primary key,
    sub_category_id int not null references sub_categories(id),
    name varchar(64) not null,
    status varchar(64) not null default 'enabled' 
);

create table products(
    id serial primary key,
    product_category_id int not null references product_category(id),
    name varchar(64) not null,
    description varchar(128) not null,
    price decimal(15,2) not null,
    image varchar(128) not null,
    status varchar(64) not null default 'enabled' 
);

create table drivers(
    id serial primary key,
    name varchar(64) not null,
    birth varchar(16) not null,
    phone varchar(12) not null,
    car_number varchar(12) not null,
    car_name varchar(32) not null,
    status varchar(64) not null default 'enabled'
);


create table orders (
    id serial primary key,
    user_id int not null references users(id),
    driver_id int not null references drivers(id),
    time varchar(64) not null,
    product_id int not null references products(id), 
    product_count int not null default 1,
    payment varchar(64) not null default 'disabled',
    status varchar(64) not null default 'qabul' -- yakun bekor yetkazish
);

create table complaint(
    id serial primary key,
    user_id int null references users(id),
    time varchar(64) not null,
    complaint text not null,    
    user_telegram_id bigint
);






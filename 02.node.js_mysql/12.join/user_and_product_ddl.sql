drop table users;
drop table products;
/* 1. 테이블 생성 */
create table users(
	id int auto_increment primary key, 
	name varchar(255),
	favorite_product int
);

create table products(
	id int primary key, 
	name varchar(255)
);

/* 2. FOREIGN KEY 제약 조건 추가 */
alter table users add constraint product_foriegn_key foreign key(favorite_product)
references products(id);

/* 3. INSERT DATA */
insert into products(id, name)
values 
	(154, 'Chocolate Heaven'),
	(155, 'Tasty Lemons'),
	(156, 'Vanilla Dreams');

insert into users
	(name, favorite_product)
values
	('John', 154),
	('Peter', 155),
	('Amy', 155),
	('Peter', null),
	('Michael', null);
	
/* 4. 조회 */
select * from users;
select * from products;
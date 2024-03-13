CREATE TABLE items (
	id serial UNIQUE NOT NULL,
	name varchar(255) NOT NULL,
	price FLOAT NOT NULL,
	url varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
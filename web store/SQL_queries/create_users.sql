CREATE TABLE users (
	id SERIAL UNIQUE NOT NULL,
	mail varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	date_registered DATE NOT NULL DEFAULT CURRENT_DATE,
	direction varchar(255),
	PRIMARY KEY (id)
);
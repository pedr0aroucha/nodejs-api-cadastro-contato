CREATE table IF NOT EXISTS contacts (
	id serial PRIMARY KEY,
	nome VARCHAR (200) NOT NULL,
	celular VARCHAR (20) NOT NULL
);
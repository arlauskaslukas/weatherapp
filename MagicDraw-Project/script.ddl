#@(#) script.ddl

DROP TABLE IF EXISTS DayForecast;
DROP TABLE IF EXISTS City;

CREATE TABLE City
(
	id int,
	name varchar (255),
	PRIMARY KEY(id)
);

CREATE TABLE DayForecast
(
	day date,
	windSpeed float,
	dayTemperature float,
	nightTemperature float,
	humidity int,
	sunrise date,
	sunset date,
	weatherStatus char (6),
	id_DayForecast integer,
	fk_Cityid int NOT NULL,
	CHECK(weatherStatus in ('Cloudy', 'Rainy', 'Sunny')),
	PRIMARY KEY(id_DayForecast),
	CONSTRAINT has FOREIGN KEY(fk_Cityid) REFERENCES City (id)
);

DROP TABLE IF EXISTS assignments;
DROP TABLE IF EXISTS sailors;
DROP TABLE IF EXISTS ranks;
DROP TABLE IF EXISTS fleets;
DROP TABLE IF EXISTS ships;


CREATE TABLE fleets (
  id SERIAL PRIMARY KEY,
  fleet_name VARCHAR(255)

);

CREATE TABLE ships (
  id SERIAL PRIMARY KEY,
  ship_name VARCHAR(255),
  date_build DATE,
  fleet_id INT REFERENCES fleets(id)
);

CREATE TABLE ranks (
  id SERIAL PRIMARY KEY,
  rank_name VARCHAR(255)
);


CREATE TABLE sailors (
  id SERIAL PRIMARY KEY,
  sailor_name VARCHAR(255),
  sailor_date_birth DATE
);

CREATE TABLE assignments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  start_date DATE,
  end_date DATE,
  rank VARCHAR(255),
  rank_id INT REFERENCES ranks(id),
  sailor_id INT REFERENCES sailors(id),
  ship_id INT REFERENCES ships(id)
);


DROP DATABASE IF EXISTS example_db;
CREATE DATABASE example_db;
\c example_db
DROP TABLE IF EXISTS foods;
CREATE TABLE foods (name VARCHAR(255), calories INT);
INSERT INTO foods VALUES ('Apple', 52);
INSERT INTO foods VALUES ('Banana', 89);
INSERT INTO foods VALUES ('Melon', 42);
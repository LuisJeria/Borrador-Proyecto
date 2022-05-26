CREATE DATABASE ng_restaurant_db;

USE ng_restaurant_db;

CREATE TABLE mesas(
    id_mesa INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    position int(11),
    status VARCHAR(20)
);
CREATE TABLE ingresos(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo_documento VARCHAR(100),
    numero_documento VARCHAR(20),
    neto int(11),
    iva int(11),
    total int(11)
);
CREATE TABLE egresos(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo_documento varchar(50),
    numero_documento varchar(20),
    neto int(11),
    iva int(11),
    total int(11)
);
CREATE TABLE pedidos(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item varchar(50), 
    cantidad int(10),
    neto int(11),
    iva int(11),
    total int(11)
);
DESCRIBE mesas;
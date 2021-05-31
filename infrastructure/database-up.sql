SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;


SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `gibriEvents_db` DEFAULT CHARSET = utf8mb4 DEFAULT COLLATE = utf8mb4_unicode_ci;

USE `gibriEvents_db`;


# SET FOREIGN_KEY_CHECKS=0;
# DROP TABLE hosts;
# DROP TABLE users;
# DROP TABLE events;
# DROP TABLE event_histories;
# SET FOREIGN_KEY_CHECKS=1;


DROP TABLE IF EXISTS hosts;
CREATE TABLE hosts(
    host_id int AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(500) NOT NULL,
    city VARCHAR(20),
    phone_number VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS users;
CREATE TABLE users(
    user_id int AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(500) NOT NULL,
    city VARCHAR(20),
    phone_number VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS events;
CREATE TABLE events(
    event_id int AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(100) NOT NULL,
    event_artist VARCHAR(50) NOT NULL,
    host_id int NOT NULL,
    event_date DATETIME NOT NULL,
    event_city VARCHAR(50) NOT NULL,
    event_description VARCHAR(200),
    address VARCHAR(50),
    FOREIGN KEY (host_id) REFERENCES hosts(host_id)
);

DROP TABLE IF EXISTS event_histories;
CREATE TABLE event_histories(
    event_history_id int AUTO_INCREMENT PRIMARY KEY,
    host_id int NOT NULL,
    user_id int NOT NULL,
    event_id int NOT NULL,
    event_name VARCHAR(50) NOT NULL,
    event_date DATETIME NOT NULL,
    FOREIGN KEY (host_id) REFERENCES hosts(host_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);
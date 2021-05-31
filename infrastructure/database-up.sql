SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;


SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `gibriEvents_db` DEFAULT CHARSET = utf8mb4 DEFAULT COLLATE = utf8mb4_unicode_ci;

USE `gibriEvents_db`;


# SET FOREIGN_KEY_CHECKS=0;
# DROP TABLE venues;
# DROP TABLE users;
# DROP TABLE events;
# DROP TABLE event_histories;
# SET FOREIGN_KEY_CHECKS=1;


DROP TABLE IF EXISTS venues;
CREATE TABLE venues(
    venue_type VARCHAR(200) NOT NULL,
    venue_id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(300) NOT NULL,
    city VARCHAR(20),
    phone_number VARCHAR(20) NOT NULL,
    work_hours VARCHAR(100),
    facebook VARCHAR(300),
    instagram VARCHAR(300),
    twitter VARCHAR(300),
    image VARCHAR(300)    
);

DROP TABLE IF EXISTS users;
CREATE TABLE users(
    user_id int AUTO_INCREMENT PRIMARY KEY,
    user_type VARCHAR(200) NOT NULL,
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
    venue_id int NOT NULL,
    event_date DATETIME NOT NULL,
    event_city VARCHAR(50) NOT NULL,
    event_description VARCHAR(200),
    address VARCHAR(50),
    image VARCHAR(250),
    FOREIGN KEY (venue_id) REFERENCES venues(venue_id)
);

DROP TABLE IF EXISTS event_histories;
CREATE TABLE event_histories(
    event_history_id int AUTO_INCREMENT PRIMARY KEY,
    venue_id int NOT NULL,
    user_id int NOT NULL,
    event_id int NOT NULL,
    event_name VARCHAR(50) NOT NULL,
    event_date DATETIME NOT NULL,
    FOREIGN KEY (venue_id) REFERENCES venues(venue_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

DROP TABLE IF EXISTS user_types;
CREATE TABLE user_types(
    user_type_id int AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(200) NOT NULL
);

DROP TABLE IF EXISTS user_venues;
CREATE TABLE user_venues(
    user_venue_id int AUTO_INCREMENT PRIMARY KEY,
    user_type_id int NOT NULL,
    type VARCHAR(200) NOT NULL,
    FOREIGN KEY (user_type_id) REFERENCES user_types(user_type_id)    
);
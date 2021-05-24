CREATE TABLE hosts(
    host_id int AUTO_INCREMENT PRIMARY KEY,
    host_first_name VARCHAR(50) NOT NULL,
    host_last_name  VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    city VARCHAR(20),
    phone_number VARCHAR(20) NOT NULL,
)

CREATE TABLE users(
    user_id int AUTO_INCREMENT PRIMARY KEY,
    user_first_name VARCHAR(50) NOT NULL,
    user_last_name  VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    city VARCHAR(20),
    phone_number VARCHAR(20) NOT NULL,

)

CREATE TABLE events(
    event_id int AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(100) NOT NULL,
    event_date DATETIME DEFAULT NOT NULL,
    event_adress VARCHAR(50),
    host_id FOREIGN KEY (host_id) REFERENCES hosts (host_id),

)

CREATE TABLE event_history(
    host_id FOREIGN KEY (host_id) REFERENCES hosts (host_id)
    user_id FOREIGN KEY (user_id) REFERENCES user (user_id)
    event_id FOREIGN KEY (event_id) REFERENCES events (event_id)
    event_name VARCHAR(50) NOT NULL,
    event_date DATETIME DEFAULT NOT NULL
)
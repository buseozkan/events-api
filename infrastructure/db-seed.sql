/* Initialize DB with some seed data */
USE `gibriEvents_db`;


INSERT INTO users (user_id, first_name, last_name, email, password, city, phone_number)
VALUES ("1","Ahmet", "Akinsql", "ahmet@gmail.com",  SHA2(CONCAT("123456","KABLO_SOYMA_MAKINESI"), 224), "Lefkoşa", 05338668666);
INSERT INTO users (user_id, first_name, last_name, email, password, city, phone_number)
VALUES ("2","Buse", "Hermione", "buse@buse.com",  SHA2(CONCAT("654123","KABLO_SOYMA_MAKINESI"), 224), "Mağusa", 05338444444);
INSERT INTO users (user_id, first_name, last_name, email, password, city, phone_number)
VALUES ("3","Ahmet", "Mısır-x", "ahmet@ahmet.com",  SHA2(CONCAT("654321","KABLO_SOYMA_MAKINESI"), 224), "Omorfo", 05338555555);


INSERT INTO hosts (host_id, first_name, last_name, email, password, city, phone_number)
VALUES ("1","Ahmet", "Mısırlısoy", "ahmet@mısır.com",  SHA2(CONCAT("654321","KABLO_SOYMA_MAKINESI"), 224),"Girne", 05338556055);
INSERT INTO hosts (host_id, first_name, last_name, email, password, city, phone_number)
VALUES ("2","Ayşe", "Falanfıstık", "ayşe@fıstıcx.com",  SHA2(CONCAT("654321","KABLO_SOYMA_MAKINESI"), 224),"Lefkoşa", 05338557055);
INSERT INTO hosts (host_id, first_name, last_name, email, password, city, phone_number)
VALUES ("3","İsmayıl", "ismailoğlu", "ismile@smile.com",  SHA2(CONCAT("654321","KABLO_SOYMA_MAKINESI"), 224),"İskele", 05338656055);

INSERT INTO events (event_id, event_name, event_artist, host_id, event_date, event_city, event_description, address)
VALUES ("1","Bob Marley Tribute Night","sensiJam", "1", "2020-09-20", "Girne", "daha güzel event", "X Bar");
INSERT INTO events (event_id, event_name, event_artist, host_id, event_date, event_city, event_description, address)
VALUES ("2","Bob Dylan Tribute Night", "ahmetGaraçoçço", "2", "2020-07-20", "Lefkoşa","kötü event", "Y Bar");
INSERT INTO events (event_id, event_name, event_artist, host_id, event_date, event_city, event_description, address)
VALUES ("3","Bob Ross Drawing Night", "sexyJam", "3", "2020-08-20", "Mağusa", "güzel event", "Z Bar");


INSERT INTO event_histories (event_history_id, host_id, user_id, event_id, event_name, event_date)
VALUES("1","2","2","1","Bob Dylan Tribute Night","2020-07-20");
INSERT INTO event_histories (event_history_id, host_id, user_id, event_id, event_name, event_date)
VALUES("2","1","3","1","Bob Marley Tribute Night","2020-09-20");
INSERT INTO event_histories (event_history_id, host_id, user_id, event_id, event_name, event_date)
VALUES("3","3","1","3","Bob Ross Drawing Night","2020-08-20");

/* Initialize DB with some seed data */
USE `gibriEvents_db`;


INSERT INTO users (user_id, user_type, first_name, last_name, email, password, city, phone_number)
VALUES ("1","restaurant","Ahmet", "Akinsql", "ahmet@gmail.com",  SHA2(CONCAT("123456","GIBRI_EVENT_APP"), 224), "Lefkoşa", "05338668666");
INSERT INTO users (user_id, user_type, first_name, last_name, email, password, city, phone_number)
VALUES ("2","bar","Buse", "Hermione", "buse@buse.com",  SHA2(CONCAT("123456","GIBRI_EVENT_APP"), 224), "Mağusa", "05338444444");
INSERT INTO users (user_id,user_type, first_name, last_name, email, password, city, phone_number)
VALUES ("3","cinema","Ahmet", "Mısır-x", "ahmet@ahmet.com",  SHA2(CONCAT("123456","GIBRI_EVENT_APP"), 224), "Omorfo", "05338555555");


INSERT INTO venues (venue_id, name, description, city, phone_number,work_hours,facebook, instagram, twitter, image)
VALUES (1, "narnia", "pub and live music", "Lefkoşa", "0533845552233","20:00-02:00", "www.facebook.com/narnia", "www.instagram.com/narnia", "www.twitter.com/narnia","narnia.jpg" );
INSERT INTO venues (venue_id, name, description, city, phone_number,work_hours,facebook, instagram, twitter, image)
VALUES (2, "shamrock", "bar and live music", "Mağusa", "0533845552244","21:00-02:00", "www.facebook.com/shamrock", "www.instagram.com/shamrock", "www.twitter.com/shamrock","shamrock.jpg" );

INSERT INTO venues (venue_id, name, description, city, phone_number,work_hours,facebook, instagram, twitter, image)
VALUES (3, "cage club", "electronic music", "Girne", "0533845552255","22:00-02:00", "www.facebook.com/cage", "www.instagram.com/cage", "www.twitter.com/cage","cage.jpg" );


INSERT INTO events (event_id, event_name, event_artist,venue_id, event_date, event_city, event_description, address, image)
VALUES ("1","Bob Marley Tribute Night","sensiJam", "1", "2020-09-20", "Girne", "daha güzel event", "X Bar","image");
INSERT INTO events (event_id, event_name, event_artist,venue_id, event_date, event_city, event_description, address, image)
VALUES ("2","Bob Dylan Tribute Night", "ahmetGaraçoçço", "2", "2020-07-20", "Lefkoşa","kötü event", "Y Bar","image");
INSERT INTO events (event_id, event_name, event_artist,venue_id, event_date, event_city, event_description, address, image)
VALUES ("3","Bob Ross Drawing Night", "sexyJam", "3", "2020-08-20", "Mağusa", "güzel event", "Z Bar","image");


INSERT INTO event_histories (event_history_id, venue_id, user_id, event_id, event_name, event_date)
VALUES("1","2","2","1","Bob Dylan Tribute Night","2020-07-20");
INSERT INTO event_histories (event_history_id, venue_id, user_id, event_id, event_name, event_date)
VALUES("2","1","3","1","Bob Marley Tribute Night","2020-09-20");
INSERT INTO event_histories (event_history_id, venue_id, user_id, event_id, event_name, event_date)
VALUES("3","3","1","3","Bob Ross Drawing Night","2020-08-20");

INSERT INTO user_types(user_type_id,`type`)
VALUES(1,"Admin");
INSERT INTO user_types(user_type_id,`type`)
VALUES(2,"Guest");

INSERT INTO user_venues(user_venue_id,user_type_id,user_id,venue_id)
VALUES(1,1,1,1);
INSERT INTO user_venues(user_venue_id,user_type_id,user_id,venue_id)
VALUES(2,2,2,2);
INSERT INTO user_venues(user_venue_id,user_type_id, user_id,venue_id)
VALUES(3,1,3,3);

#INSERT INTO feedbacks(user_name,email,feedback_message,feedback_date)
#VALUES("");
#INSERT INTO feedbacks(user_name,email,feedback_message,feedback_date)
#VALUES("");
#INSERT INTO feedbacks(user_name,email,feedback_message,feedback_date)
#VALUES("");

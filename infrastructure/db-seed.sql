/* Initialize DB with some seed data */
USE `gibriEvents_db`;


INSERT INTO users (first_name, last_name, email, password, city, phone_number)
VALUES ("Ahmet", "Akinsel", "ahmet@gmail.com",  SHA2(CONCAT("123456","GIBRI_EVENT_APP"), 224),"Lefkoşa","05338221133");
INSERT INTO users (first_name, last_name, email, password, city, phone_number)
VALUES ("Buse", "Ozkan", "buse@buse.com",  SHA2(CONCAT("123456","GIBRI_EVENT_APP"), 224),"Magusa","05338445566");
INSERT INTO users (first_name, last_name, email, password, city, phone_number)
VALUES ("Ahmet", "MısırLı", "ahmet@ahmet.com",  SHA2(CONCAT("123456","GIBRI_EVENT_APP"), 224),"Omorfo","05338554433");

INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Ahmet Evan", "2021-07-20", "Lefkoşa", "Pop-Rock Live", "Narnia Garden","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Rast", "2021-07-25", "Lefkoşa", "Pop-Rock Live", "Narnia Garden","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Privillige at Papa Bar","Dj Privillige", "2021-07-25", "Lefkoşa", "Techno Party", "Papa Bar","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Eril Cambaz", "2021-07-28", "Lefkoşa", "Pop-Rock Acustic", "Narnia Garden","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Reva", "2021-07-18", "Lefkoşa", "Pop-Rock Live", "Narnia Garden","image");

INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Reggea Concert","SensiJam", "2021-08-01", "Magusa", "Reggea Night", "Bedis Beach","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Reggea Concert","Bunfyah", "2021-07-15", "Magusa", "Reggea Night", "Bedis Beach","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Fikri Karayel", "2021-08-15", "Magusa", "Live Music", "Shamrock Bar","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Ezgi Akgurgen", "2021-08-10", "Magusa", "Acustic Live Music", "DeMolay Bar","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Electronic Music","Atesh", "2021-08-01", "Magusa", "Electronic Music", "Monks-inn","image");

INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Reggea Concert","MishaRoots", "2021-08-15", "Girne", "Reggea Night", "Bedis Beach","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Jazz Concert","Todds and Friends", "2021-07-28", "Girne", "Jazz Night", "Baromonte","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Nafiz Dölek", "2021-08-15", "Girne", "Live Music", "Papageno Bar","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Organic Pixel", "2021-07-28", "Girne", "Live Music", "Soulist Cafe-Bar","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Jazz Concert","Cahit Kutrafalı Trio", "2021-08-01", "Girne", "Jazz Night", "Monks-inn","image");

INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Reggea Concert","MishaRoots", "2021-08-30", "Güzelyurt", "Reggea Night", "Güzelyurt Plajı","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Electronic Music","Dj Coşkuner", "2021-08-01", "Güzelyurt", "90s Pop", "B Bar","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Oğulcan Başarı", "2021-08-18", "Güzelyurt", "Live Music", "A Bar","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Dilar Ferit", "2021-07-28", "Güzelyurt", "Live Music", "Pizza Vira","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Osman Tuğsal", "2021-08-07", "Güzelyurt", "Live Music", "C Bar","image");

INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Reggea Concert","The Healers", "2021-08-22", "İskele", "Reggea Night", "İskele Plajı","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Electronic Music","Zildji", "2021-08-09", "İskele", "Electronic Dance Music", "Machenzi Beach","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Ahmet Evan", "2021-08-18", "İskele", "Live Music", "Royal Bar","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Electronic Music","OneBlood", "2021-07-20", "İskele", "Trap Music", "İskele Beach","image");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Osman Tuğsal", "2021-08-16", "İskele", "Live Music", "Royal Bar","image");


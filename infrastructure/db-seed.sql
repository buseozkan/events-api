/* Initialize DB with some seed data */
USE `gibriEvents_db`;


INSERT INTO users (user_id, first_name, last_name, email, password, city, phone_number)
VALUES ("1", "Ahmet", "Akinsel", "ahmet@gmail.com",  SHA2(CONCAT("123456","GIBRI_EVENT_APP"), 224),"Lefkosa","05338221133");
INSERT INTO users (user_id, first_name, last_name, email, password, city, phone_number)
VALUES ("2", "Buse", "Ozkan", "buse@buse.com",  SHA2(CONCAT("123456","GIBRI_EVENT_APP"), 224),"Magusa","05338445566");
INSERT INTO users (user_id, first_name, last_name, email, password, city, phone_number)
VALUES ("3", "Ahmet", "MısırLı", "ahmet@ahmet.com",  SHA2(CONCAT("123456","GIBRI_EVENT_APP"), 224),"Omorfo","05338554433");

INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Ahmet Evan", "2021-07-20", "Lefkosa", "Pop-Rock Live", "Narnia Garden","../assets/images/Ahmet-Evan.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, `image`)
VALUES ("Live Music","Rast", "2021-07-25", "Lefkosa", "Pop-Rock Live", "Narnia Garden","../assets/images/rast.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Privillige at Papa Bar","Dj Privillige", "2021-07-25", "Lefkosa", "Techno Party", "Papa Bar","../assets/images/priv.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Eril Cambaz", "2021-07-28", "Lefkosa", "Pop-Rock Acustic", "Narnia Garden","../assets/images/eril.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Reva", "2021-07-18", "Lefkosa", "Pop-Rock Live", "Narnia Garden","../assets/images/reva.jpeg");

INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Reggea Concert","SensiJam", "2021-08-01", "Magusa", "Reggea Night", "Bedis Beach","../assets/images/sensijam.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Reggea Concert","Bunfyah", "2021-07-15", "Magusa", "Reggea Night", "Bedis Beach","../assets/images/bun.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Fikri Karayel", "2021-08-15", "Magusa", "Live Music", "Shamrock Bar","../assets/images/fikri.png");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Ezgi Akgurgen", "2021-08-10", "Magusa", "Acustic Live Music", "DeMolay Bar","../assets/images/ezgi.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Electronic Music","Atesh", "2021-08-01", "Magusa", "Electronic Music", "Monks-inn","../assets/images/ates.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Reggea Concert","MishaRoots", "2021-08-15", "Girne", "Reggea Night", "Bedis Beach","../assets/images/misaro.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Jazz Concert","Todds and Friends", "2021-07-28", "Girne", "Jazz Night", "Baromonte","../assets/images/tod.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Nafiz Dolek", "2021-08-15", "Girne", "Live Music", "Papageno Bar","../assets/images/nafiz.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Organic Pixel", "2021-07-28", "Girne", "Live Music", "Soulist Cafe-Bar","../assets/images/organic.png");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Jazz Concert","Cahit Kutrafali Trio", "2021-08-01", "Girne", "Jazz Night", "Monks-inn","../assets/images/cahit.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Reggea Concert","MishaRoots", "2021-08-30", "Guzelyurt", "Reggea Night", "Guzelyurt Plajı","../assets/images/misaro.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Electronic Music","Dj Coskuner", "2021-08-01", "Guzelyurt", "90s Pop", "B Bar","../assets/images/djcosk.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Ogulcan Basari", "2021-08-18", "Guzelyurt", "Live Music", "A Bar","../assets/images/ogul.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Dilara Ferit", "2021-07-28", "Guzelyurt", "Live Music", "Pizza Vira","../assets/images/dilara.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Osman Tugsal", "2021-08-07", "Guzelyurt", "Live Music", "C Bar","../assets/images/osman.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Reggea Concert","The Healers", "2021-08-22", "Iskele", "Reggea Night", "Iskele Plajı","../assets/images/healers.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Electronic Music","Zildji", "2021-08-09", "Iskele", "Electronic Dance Music", "Machenzi Beach","../assets/images/zildji.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Ahmet Evan", "2021-08-18", "Iskele", "Live Music", "Royal Bar","../assets/images/Ahmet-Evan.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Electronic Music","OneBlood", "2021-07-20", "Iskele", "Trap Music", "Iskele Beach","../assets/images/oneblood.jpeg");
INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, address, image)
VALUES ("Live Music","Osman Tugsal", "2021-08-16", "Iskele", "Live Music", "Royal Bar","../assets/images/osman.jpeg");


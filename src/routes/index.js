const express = require("express");
const deleteEvent = require("../apps/controllers/events/deleteEvent");
const getEvents = require("../apps/controllers/events/getEvents");
const getEvent = require("../apps/controllers/events/getEvent");
const postEvent = require("../apps/controllers/events/postEvent");
const getVenues = require("../apps/controllers/venues/getVenues");
const getVenue = require("../apps/controllers/venues/getVenue");
const postVenue = require("../apps/controllers/venues/postVenue");
const deleteVenue = require("../apps/controllers/venues/deleteVenue");
const login = require("../apps/controllers/users/login/login");
const register = require("../apps/controllers/users/register/register");
const auth = require("~root/apps/middlewares/authentication");
const postPassword = require("~root/apps/controllers/passwords/postPassword");

const router = express.Router();

router.get("/events", getEvents);
router.get("/events/:eventId", getEvent);
router.get("/venues", getVenues);
router.get("/venue/:venueId", getVenue);

router.post("/event", auth, postEvent);
router.post("/venues/:venueId", postVenue);

router.delete("/deleteEvent/:eventId", auth, deleteEvent);
router.delete("/deleteVenue/:venueId", auth, deleteVenue);

router.post("/login", login);
router.post("/register", register);

router.post("/forgetpassword", postPassword);
/*router.post("/feedbacks", feedback);*/

module.exports = router;

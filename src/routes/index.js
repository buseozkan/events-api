const express = require("express");
const deleteEvent = require("../apps/controllers/events/deleteEvent");
const getEvents = require("../apps/controllers/events/getEvents");
const getEvent = require("../apps/controllers/events/getEvent");
const postEvent = require("../apps/controllers/events/postEvent");
const getVenues = require("../apps/controllers/venues/getVenues");
const getVenue = require("../apps/controllers/venues/getVenue");

const router = express.Router();

router.get("/events", getEvents);
router.get("/event/:eventId", getEvent);
router.get("/venues", getVenues);
router.get("/venue/:venueId", getVenue);

router.post("/postEvent", postEvent);
router.delete("/deleteEvent/:eventId", deleteEvent);

module.exports = router;

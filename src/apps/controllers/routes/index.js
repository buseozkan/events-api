const express = require("express");
const getEvents = require("../events/getEvent/index");
const getArtistName = require("../events/getArtistName/getArtistName");
const getEventCity = require("../events/getEventCity/getEventCity");
const getEventName = require("../events/getEventName/getEventName");
const postEvent = require("../events/postEvent/postEvent");

const router = express.Router();

router.get("/getEvents", getEvents);
router.get("/getArtistName", getArtistName);
router.get("/getEventCity", getEventCity);
router.get("/getEventName", getEventName);

router.post("/postEvent", postEvent);

router.delete("/deleteEvent", deleteEvent);

module.exports = router;

const express = require("express");
const getEvents = require("../events/getEvent/index");
const getArtistName = require("../events/getArtistName/getArtistName");
const getEventCity = require("../events/getEventCity/getEventCity");
const getEventName = require("../events/getEventName/getEventName");

const router = express.Router();

router.get("/getEvents", getEvents);
router.get("/getArtistName", getArtistName);
router.get("/getEventCity", getEventCity);
router.get("/getEventName", getEventName)

module.exports = router;
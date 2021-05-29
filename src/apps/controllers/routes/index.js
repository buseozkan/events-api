const express = require("express");
const getEvents = require("../events/getEvent/index");
const getArtistName = require("../events/getArtistName/getArtistName");
const getEventCity = require("../events/getEventCity/getEventCity");
const router = express.Router();

router.get("/getEvents", getEvents);
router.get("/getArtistName", getArtistName);
router.get("/getEventCity", getEventCity);

module.exports = router;
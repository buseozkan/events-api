const express = require("express");
const deleteEvent = require("../apps/controllers/events/deleteEvent");
const getEvents = require("../apps/controllers/events/getEvents"); /*
const getArtistName = require("../events/getArtistName/getArtistName");
const getEventCity = require("../events/getEventCity/getEventCity");
const getEventName = require("../events/getEventName/getEventName");*/
const postEvent = require("../apps/controllers/events/postEvent");

const router = express.Router();

router.get(
  "/events",
  getEvents
); /*
router.get("/getArtistName", getArtistName);
router.get("/getEventCity", getEventCity);
router.get("/getEventName", getEventName);*/

router.post("/postEvent", postEvent);
router.delete("/deleteEvent/:eventId", deleteEvent);

module.exports = router;

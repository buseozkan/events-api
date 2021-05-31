const express = require("express");
const deleteEvent = require("../apps/controllers/events/deleteEvent");
const getEvents = require("../apps/controllers/events/getEvents");
const getEvent = require("../apps/controllers/events/getEvent");

const postEvent = require("../apps/controllers/events/postEvent");

const router = express.Router();

router.get("/events", getEvents);
router.get("/event/:eventId", getEvent);

router.post("/postEvent", postEvent);
router.delete("/deleteEvent/:eventId", deleteEvent);

module.exports = router;

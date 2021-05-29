const express = require("express");
const getEvents = require("../events/getEvent/index");

const router = express.Router();

router.get("/getEvents", getEvents);

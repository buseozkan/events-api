const express = require("express");
//getEvents (req)

const router = express.Router();

router.get("/getEvents", getEvents);

const express = require("express");
const getEvents = require("../apps/controllers/events/getEvents");
const getEvent = require("../apps/controllers/events/getEvent");
const postEvent = require("../apps/controllers/events/postEvent");
const login = require("../apps/controllers/users/login/login");
const register = require("../apps/controllers/users/register/register");
const auth = require("~root/apps/middlewares/authentication");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

router.post("/event", auth, postEvent);

router.get("/events", getEvents);
router.get("/events/:eventId", getEvent);

module.exports = router;

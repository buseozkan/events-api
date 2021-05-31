const handleApiError = require("~root/utils//handleApiError");
const fetchEvents = require("~root/actions/event/fetchEvents");

const getEvents = async (req, res) => {
  try {
    const { events } = await fetchEvents();

    res.send({ events });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = getEvents;

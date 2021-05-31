const handleApiError = require("~root/utils//handleApiError");
const fetchEvent = require("~root/actions/event/fetchEvent");

const getEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const { event } = await fetchEvent({ eventId });

    res.send({ event });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = getEvent;

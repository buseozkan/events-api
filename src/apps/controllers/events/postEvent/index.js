const createEvent = require("~root/actions/event/createEvent/index");
const handleApiError = require("~root/utils/handleApiError/index");

const postEvent = async (req, res) => {
  const {
    event_name,
    event_artist,
    venue_id,
    event_date,
    event_city,
    event_description,
    address
  } = req.body;

  try {
    const { event } = await createEvent({
      event_name,
      event_artist,
      venue_id,
      event_date,
      event_city,
      event_description,
      address
    });
    res.send({
      event
    });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = postEvent;

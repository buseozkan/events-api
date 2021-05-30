const createEvent = require("../createEvent/queries/index");
const handleApiError = require("../../../../../utils/handleApiError/index");

const postEvent = async (req, res) => {
  const host_id = 1;
  const {
    event_id,
    event_name,
    event_artist,
    host_id,
    event_date,
    event_city,
    event_description,
    address,
    slug
  } = req.body;

  try {
    const { event } = await createEvent({
      event_id,
      event_name,
      event_artist,
      host_id,
      event_date,
      event_city,
      event_description,
      address,
      slug
    });
    res.send({
      event
    });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = postEvent;

const createEvent = require("~root/actions/event/createEvent/index");
const handleApiError = require("~root/utils/handleApiError/index");

const postEvent = async (req, res) => {
  const { userId } = req.user;

  const {
    eventName,
    eventArtist,
    venueId,
    eventDate,
    eventCity,
    eventDescription,
    address
  } = req.body;

  try {
    await postEventSchema.validate(
      { userId, venueId },
      {
        abortEarly: false
      }
    );
    const { event } = await createEvent({
      eventName,
      eventArtist,
      venueId,
      eventDate,
      eventCity,
      eventDescription,
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

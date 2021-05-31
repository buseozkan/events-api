const removeEvent = require("~root/actions/event/removeEvent");
const handleApiError = require("~root/utils/handleApiError");

const deleteEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const { deletedEvent } = await removeEvent({ eventId });
    res.send({
      deletedEvent
    });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = deleteEvent;

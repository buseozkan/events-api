const deleteEventQuery = require("./queries/deleteEventQuery");

const removeEvent = async ({ eventId }) => {
  const deletedEvent = await deleteEventQuery({
    eventId
  });

  return { deletedEvent };
};

module.exports = removeEvent;

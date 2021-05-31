const selectEvent = require("./queries/selectEvent");

const fetchEvent = async ({ eventId }) => {
  const event = await selectEvent({ eventId });

  return { event };
};

module.exports = fetchEvent;

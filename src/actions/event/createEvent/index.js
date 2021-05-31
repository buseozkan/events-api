const insertEvent = require("../createEvent/queries/insertEvent");

const createEvent = async ({
  event_name,
  event_artist,
  venue_id,
  event_date,
  event_city,
  event_description,
  address
}) => {
  const event = await insertEvent({
    event_name,
    event_artist,
    venue_id,
    event_date,
    event_city,
    event_description,
    address
  });

  return { event };
};

module.exports = createEvent;

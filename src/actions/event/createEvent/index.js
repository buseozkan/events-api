const insertEvent = require("../createEvent/queries/insertEvent");

const createEvent = async ({
  eventName,
  eventArtist,
  eventDate,
  eventCity,
  eventDescription,
  address
}) => {
  const event = await insertEvent({
    eventName,
    eventArtist,
    eventDate,
    eventCity,
    eventDescription,
    address
  });

  return { event };
};

module.exports = createEvent;

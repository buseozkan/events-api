const selectEvents = require("./queries/selectEvents");

const fetchVenues = async () => {
  const events = await selectEvents();

  return { events };
};

module.exports = fetchVenues;

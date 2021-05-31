const selectVenues = require("./queries/selectEvents");

const fetchVenues = async () => {
  const venues = await selectEvents();

  return { venues };
};

module.exports = fetchVenues;

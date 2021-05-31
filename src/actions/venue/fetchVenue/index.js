const selectVenue = require("./queries/selectVenue");

const fetchVenue = async ({ venueId }) => {
  const venue = await selectVenue({ venueId });

  return { venue };
};

module.exports = fetchVenue;

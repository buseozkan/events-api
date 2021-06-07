const deleteVenueQuery = require("./queries/deletedVenueQuery");

const removeVenue = async ({ venueId }) => {
  const deletedVenue = await deleteVenueQuery({
    venueId
  });

  return { deletedVenue };
};

module.exports = removeVenue;

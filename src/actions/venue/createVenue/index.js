const insertVenue = require("./queries/insertVenue");
const insertUserVenue = require("./queries/insertUserVenue");

const createVenue = async ({
  venueType,
  name,
  description,
  city,
  phoneNumber,
  workHours,
  facebook,
  instagram,
  twitter,
  image
}) => {
  const venue = await insertVenue({
    venueType,
    name,
    description,
    city,
    phoneNumber,
    workHours,
    facebook,
    instagram,
    twitter,
    image
  });

  const userVenue = await insertUserVenue({
    userVenueId,
    userId,
    venueId: venue.venue_id
  });

  return { venue };
};

module.exports = createVenue;

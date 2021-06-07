const insertVenue = require("./queries/insertVenue");
const insertUserVenue = require("./queries/insertUserVenue");

const createVenue = async ({
  venue_type,
  name,
  description,
  city,
  phone_number,
  work_hours,
  facebook,
  instagram,
  twitter,
  image
}) => {
  const venue = await insertVenue({
    venue_type,
    name,
    description,
    city,
    phone_number,
    work_hours,
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

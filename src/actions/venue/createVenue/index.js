const insertVenue = require("./queries/insertVenue");

const createVenue = async ({
  venue_type,
  venue_id,
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
    venue_id,
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

  return { venue };
};

module.exports = createVenue;

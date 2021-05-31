const { submitQuery, camelKeys } = require("~root/lib/database");
const selectVenues = () => submitQuery`
      SELECT 
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
      
      FROM venues
    
  `;
module.exports = camelKeys(selectVenues);

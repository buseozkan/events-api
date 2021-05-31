const { submitQuery, camelKeys } = require("~root/lib/database");
const selectVenue = ({ venueId }) => submitQuery`
      SELECT 
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
      
      FROM venues
      WHERE venue_id = ${venueId}
    
  `;
module.exports = camelKeys(selectVenue);

const { submitQuery, camelKeys } = require("~root/lib/database");
const selectEvent = ({ eventId }) => submitQuery`
      SELECT  
        event_name,
        event_artist,
        event_city,
        event_description,
        event_date,
        venue_id, 
        image
      
      FROM events 
        WHERE event_id = ${eventId}
    
  `;
module.exports = camelKeys(selectEvent);

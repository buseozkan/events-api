const { submitQuery, camelKeys } = require("~root/lib/database");

const selectEvents = () => submitQuery`
      SELECT 
        event_id, 
        event_name,
        event_artist,
        event_city,
        event_description,
        event_date,
        image
      
      FROM events 
  `;
module.exports = camelKeys(selectEvents);

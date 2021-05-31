const { submitQuery, camelKeys } = require("~root/lib/database");
const selectEvent = () => submitQuery`
      SELECT 
        event_id, 
        event_name,
        event_artist,
        event_city,
        event_description,
        event_date,
        host_id, 
        image
      
      FROM events 
  `;
module.exports = camelKeys(selectEvent);

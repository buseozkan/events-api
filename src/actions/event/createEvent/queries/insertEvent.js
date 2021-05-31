const { submitQuery } = require("~root/lib/database");

const insertEvent = ({
  event_name,
  event_artist,
  host_id,
  event_date,
  event_city,
  event_description,
  address
}) => submitQuery`
    INSERT INTO events(
        
        event_name,
        event_artist,
        host_id,  
        event_date,
        event_city,
        event_description,
        address
      
    )
    VALUES(${event_name},${event_artist},${host_id},${event_date},${event_city},${event_description},${address})
`;

module.exports = insertEvent;

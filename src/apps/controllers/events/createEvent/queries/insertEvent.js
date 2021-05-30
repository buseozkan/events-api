const { submitQuery } = require("../../../../../lib/database/index");

const createEvent = ({
  event_id,
  event_name,
  event_artist,
  host_id,
  event_date,
  event_city,
  event_description,
  address,
  slug
}) => submitQuery`
    INSERT INTO events(
        event_id,
        event_name,
        event_artist,
        host_id,  
        event_date,
        event_city,
        event_description,
        address,
        slug
      
    )
    VALUES(${event_id},${event_name},${event_artist},${host_id},${event_date},${event_city},${event_description},${address},${slug})
`;

module.exports = createEvent;
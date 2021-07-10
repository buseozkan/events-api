const { submitQuery } = require("~root/lib/database");

const insertEvent = ({
  eventName,
  eventArtist,
  eventDate,
  eventCity,
  eventDescription,
  address
}) => submitQuery`
    INSERT INTO events(
        
        event_name,
        event_artist,
        event_date,
        event_city,
        event_description,
        address
      
    )
    VALUES(${eventName},${eventArtist},${eventDate},${eventCity},${eventDescription},${address})
`;

module.exports = insertEvent;

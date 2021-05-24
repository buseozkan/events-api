const { submitQuery, getInsertId } = require("~root/lib/database");

const insertEvent = ({
    event_id,
    event_date,
    event_name,
    event_adress
}) => submitQuery`
    INSERT INTO users (        
        event_id,
        event_date,
        event_name,
        event_adress
    )
    VALUES 
    (${eventId},${eventDate},${eventName},${eventAdress})
       
`;

module.exports = getInsertId(insertEvent);
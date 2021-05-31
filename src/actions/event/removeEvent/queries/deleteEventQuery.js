const { submitQuery } = require("~root/lib/database");

const deleteEventQuery = ({ eventId }) => submitQuery`
    DELETE FROM events 
    WHERE event_id = ${eventId}
`;

module.exports = deleteEventQuery;

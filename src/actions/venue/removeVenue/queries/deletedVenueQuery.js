const { submitQuery } = require("~root/lib/database");

const deleteVenueQuery = ({ venueId }) => submitQuery`
    DELETE FROM venues 
    WHERE venue_id = ${venueId}
`;

module.exports = deleteVenueQuery;

const { submitQuery, getFirst } = require("~root/lib/database");

const selectUserVenue = ({ userId, venueId }) => submitQuery`
    SELECT 
        user_venue_id
    FROM user_venues 
    WHERE user_id =${userId} AND venue_id= ${venueId};
`;

module.exports = getFirst(selectUserVenue, "user_venue_id");

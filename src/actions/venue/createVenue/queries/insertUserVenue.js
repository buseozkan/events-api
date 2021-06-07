const { submitQuery, getInsertId } = require("~root/lib/database");

const insertUserVenue = ({
  userTypeId, //camelCase
  userId,
  venueId
}) => submitQuery`
    INSERT INTO venues (        
        user_type_id,
        user_id,
        venue_id
    )
    VALUES 
    (${userTypeId},${userId},${venueId})
       
`;

module.exports = getInsertId(insertUserVenue);

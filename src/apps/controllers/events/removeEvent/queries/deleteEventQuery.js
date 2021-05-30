const { submitQuery } = require("../../../../../lib/database/index");

const deleteEventQuery = ({ slug }) => submitQuery`
    
DELETE FROM events
WHERE slug = ${slug} 
`;

module.exports = deleteEventQuery;
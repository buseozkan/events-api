const {
  submitQuery,
  camelKeys,
  getFirst
} = require("../../../../../lib/database/index");
const selectEvent = ({ slug }) => submitQuery`
    SELECT 
      event_id, 
      event_name,
      event_artist,
      event_city,
      event_description,
      event_date,
      host_id, 
      image, 
      slug
    FROM events 
    LEFT JOIN users ON events.host_id = hosts.host_id
    WHERE slug = ${slug}
`;
module.exports = getFirst(camelKeys(selectEvent));
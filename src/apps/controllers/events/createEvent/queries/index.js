const insertEvent = require("./queries/insertBlog");

const createEvent = async ({
  event_id,
  event_name,
  event_artist,
  host_id,
  event_date,
  event_city,
  event_description,
  address,
  slug
}) => {
  const blog = await insertEvent({
    event_id,
    event_name,
    event_artist,
    host_id,
    event_date,
    event_city,
    event_description,
    address,
    slug
  });

  return { event };
};

module.exports = createEvent;
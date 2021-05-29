const selectEvent = require("./queries/selectEvent");

const fetchEvent = async ({ slug }) => {
  const event = await selectEvent({ slug });
  return { event };
};

module.exports = fetchEvent;

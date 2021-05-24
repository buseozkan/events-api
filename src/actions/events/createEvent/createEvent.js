const insertEvent= require("./queries/inserEvent");

const createEvent = async ({
  id,
  date,
  name,
  adress
}) => {
  const user = await insertEvent({
      id,
      date,
      name,
      adress
  });

  return { user };
};

module.exports = createEvent;
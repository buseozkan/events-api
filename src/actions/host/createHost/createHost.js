const insertHost = require("./queries/insertHost");

const createHost = async ({
  firstName,
  lastName,
  email,
  password,
  city,
  phoneNumber
}) => {
  const user = await insertHost({
    firstName,
    lastName,
    email,
    password,
    city,
    phoneNumber
  });

  return { user };
};

module.exports = createHost;

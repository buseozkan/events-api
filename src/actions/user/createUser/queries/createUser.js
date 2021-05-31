const insertUser = require("./insertUser");

const createUser = async ({
  firstName,
  lastName,
  email,
  password,
  city,
  phoneNumber
}) => {
  const user = await insertUser({
    firstName,
    lastName,
    email,
    password,
    city,
    phoneNumber
  });

  return { user };
};

module.exports = createUser;

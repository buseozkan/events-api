const insertUser = require("./queries/insertUser");

const createUser = async ({
  userId,
  firstName,
  lastName,
  email,
  password,
  city,
  phoneNumber
}) => {
  const user = await insertUser({
    userId,
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

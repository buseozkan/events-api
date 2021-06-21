const insertUser = require("./queries/insertUser");

const createUser = async ({
  userType,
  firstName,
  lastName,
  email,
  password,
  city,
  phoneNumber
}) => {
  const user = await insertUser({
    userType,
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
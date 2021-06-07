const insertUser = require("./insertUser");

const createUser = async ({
  user_id,
  user_type,
  first_name,
  last_name,
  email,
  password,
  city,
  phone_number
}) => {
  const user = await insertUser({
    user_id,
    user_type,
    first_name,
    last_name,
    email,
    password,
    city,
    phone_number
  });

  return { user };
};

module.exports = createUser;

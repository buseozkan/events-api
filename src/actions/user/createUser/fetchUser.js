const selectUser = require("./queries/insertUser");

const fetchUser = async ({ email, password }) => {
  const user = await selectUser({ email, password });

  return { user };
};

module.exports = fetchUser;

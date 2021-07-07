const selectUser = require("./queries/fetchUser/queries/selectuser");

const fetchUser = async ({ email, password }) => {
  const user = await selectUser({ email, password });

  return { user };
};

module.exports = fetchUser;

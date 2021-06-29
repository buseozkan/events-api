const postPassword = require("../password");

const createNewPassword = async ({ password, email }) => {
  const newPassword = await postPassword({
    password,
    email
  });

  return { newPassword };
};

module.exports = createNewPassword;

const createNewPassword = require("~root/actions/password/index");
const handleApiError = require("~root/utils/handleApiError/index");

const postPassword = async (req, res) => {
  const { password } = req.user.password;

  const { password, email } = req.body;

  try {
    const { newPassword } = await createNewPassword({
      password,
      email
    });
    res.send({
      newPassword
    });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = postPassword;

const createUser = require("~root/actions/user/createUser");
const handleApiError = require("~root/utils/handleApiError");

const postUser = async (req, res) => {
  const {
    userId,
    firstName,
    lastName,
    email,
    password,
    city,
    phoneNumber
  } = req.body;

  try {
    const { user } = await createUser({
      userId,
      firstName,
      lastName,
      email,
      password,
      city,
      phoneNumber
    });

    res.status(201).send({
      user
    });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = postUser;

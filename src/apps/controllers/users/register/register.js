const createUser = require("~root/actions/users/createUser");
const handleApiError = require("~root/utils/handleApiError");

const postUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const { user } = await createUser({
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

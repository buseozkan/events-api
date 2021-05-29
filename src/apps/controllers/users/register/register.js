/* eslint-disable no-undef */
const createUser = require("../../../../actions/user/createUser/queries/createUser");
const handleApiError = require("../../../../../utils/handleApiError")

const postUser = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    city,
    phoneNumber
  } = req.body;

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
    handleAPIError(res, err);
  }
};

module.exports = postUser;
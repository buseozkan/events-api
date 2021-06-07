/* eslint-disable no-undef */
const createUser = require("../../../../actions/user/createUser");
const handleApiError = require("../../../../../utils/handleApiError");

const postUser = async (req, res) => {
  const { firstName, lastName, email, password, city, phoneNumber } = req.body;

  /*const addressLine1 = "";
  const addressLine2 = "";
  const postcode = "";
  const state = "";
  const town = "";
  const emergencyContactName = "";
  const contactNumber = "";*/

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

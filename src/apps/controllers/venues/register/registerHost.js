/* eslint-disable no-undef */
const createUser = require("../../../../actions/user/createUser/queries/createUser");
const handleApiError = require("../../../../../utils/handleApiError");

const postUser = async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    password,
    address,
    city,
    country,
    phoneNumber
  } = req.body;

  const addressLine1 = "";
  const addressLine2 = "";
  const postcode = "";
  const state = "";
  const town = "";
  const emergencyContactName = "";
  const contactNumber = "";

  try {
    const { user } = await createUser({
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
      address,
      addressLine1,
      addressLine2,
      postcode,
      city,
      town,
      state,
      country,
      phoneNumber,
      emergencyContactName,
      contactNumber
    });

    res.status(201).send({
      user
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postUser;

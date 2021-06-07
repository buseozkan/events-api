const createVenue = require("~root/actions/venue/createVenue/index");
const handleApiError = require("~root/utils/handleApiError/index");

const postVenue = async (req, res) => {
  const {
    venueType,
    name,
    description,
    city,
    phoneNumber,
    workHours,
    facebook,
    instagram,
    twitter,
    image
  } = req.body;

  try {
    const { venue } = await createVenue({
      venueType,
      name,
      description,
      city,
      phoneNumber,
      workHours,
      facebook,
      instagram,
      twitter,
      image
    });
    res.send({
      venue
    });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = postVenue;

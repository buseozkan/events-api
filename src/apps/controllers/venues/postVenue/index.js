const createVenue = require("~root/actions/event/createEvent/index");
const handleApiError = require("~root/utils/handleApiError/index");

const postVenue = async (req, res) => {
  const {
    venue_type,
    name,
    description,
    city,
    phone_number,
    work_hours,
    facebook,
    instagram,
    twitter,
    image
  } = req.body;

  try {
    const { venue } = await createVenue({
      venue_type,
      name,
      description,
      city,
      phone_number,
      work_hours,
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

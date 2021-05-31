const handleApiError = require("~root/utils//handleApiError");
const fetchVenue = require("~root/actions/venue/fetchVenue");

const getVenue = async (req, res) => {
  const { venueId } = req.params;
  try {
    const { venue } = await fetchVenue({ venueId });

    res.send({ venue });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = getVenue;

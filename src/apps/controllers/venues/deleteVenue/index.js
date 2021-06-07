const removeVenue = require("~root/actions/event/removeEvent");
const handleApiError = require("~root/utils/handleApiError");

const deleteVenue = async (req, res) => {
  const { venueId } = req.params;

  try {
    const { deletedVenue } = await removeVenue({ venueId });
    res.send({
      deletedVenue
    });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = deleteVenue;

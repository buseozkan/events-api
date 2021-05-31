const handleApiError = require("~root/utils//handleApiError");
const fetchVenues = require("~root/actions/venue/fetchVenues");

const getVenues = async (req, res) => {
  try {
    const { venues } = await fetchVenues();

    res.send({ venues });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = getVenues;

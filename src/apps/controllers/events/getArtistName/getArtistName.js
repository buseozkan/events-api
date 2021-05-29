const handleApiError = require("../../../../../utils/handleApiError");
const fetchEvent = require("../fetchEvent/index");

const getArtistName = async (req, res) => {
  const { slug } = req.params;
  try {
    const { artist } = await fetchEvent({ slug });

    res.send({ artist });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = getArtistName;

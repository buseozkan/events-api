const handleApiError = require("../../../../../utils/handleApiError");
const fetchEvent = require("../fetchEvent/index");

const getEventCity = async (req, res) => {
  const { slug } = req.params;
  try {
    const { city } = await fetchEvent({ slug });

    res.send({ city });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = getEventCity;

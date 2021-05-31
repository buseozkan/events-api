const handleApiError = require("../../../../../utils/handleApiError");
const fetchEvent = require("../fetchEvent/index");

const getEventName = async (req, res) => {
  const { slug } = req.params;
  try {
    const { name } = await fetchEvent({ slug });
    res.send({ city });
  } catch (err) {
    handleApiError(res, err);
  }
};
module.exports = getEventName;

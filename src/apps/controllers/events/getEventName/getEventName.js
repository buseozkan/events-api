const handleApiError = require("../../../../../utils/handleApiError");
const fetchEvent = require("../getEvents/index");

const getEventName = async (req, res) => {
  const { slug } = req.params;
  try {
    const { name } = await fetchEvent({ slug });
    res.send({ name });
  } catch (err) {
    handleApiError(res, err);
  }
};
module.exports = getEventName;

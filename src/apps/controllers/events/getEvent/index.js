const handleApiError = require("~root/utils//handleApiError");
const fetchEvent = require("../fetchEvent/index");

const getEvent = async (req, res) => {
  const { slug } = req.params;
  try {
    const { event } = await fetchEvent({ slug });

    res.send({ event });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = getEvent;

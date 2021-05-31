const removeEvent = require("~root/actions/blogs/removeBlog");
const handleApiError = require("~root/utils/handleApiError");

const deleteEvent = async (req, res) => {
  const { slug } = req.params;

  try {
    const { blog } = await removeEvent({ slug });
    res.send({
      blog
    });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = deleteEvent;

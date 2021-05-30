const removeBlog = require("~root/actions/blogs/removeBlog");
const handleApiError = require("../../../../../utils/handleApiError/index");

const deleteEvent = async (req, res) => {
  const { slug } = req.params;

  try {
    const { blog } = await removeBlog({ slug });
    res.send({
      blog
    });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = deleteEvent;

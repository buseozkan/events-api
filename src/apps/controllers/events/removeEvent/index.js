const deleteBlogQuery = require("./queries/deleteBlogQuery");

const removeEvent = async ({ slug }) => {
  const blog = await deleteBlogQuery({
    slug
  });

  return { blog };
};

module.exports = removeEvent;

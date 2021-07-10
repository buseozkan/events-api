const yup = require("yup");

const postEventSchema = yup.object().shape({
  userId: yup
    .number()
    .required()
    .positive()
    .integer()
    .label("User ID")
    .typeError("User ID must be a number.")
});
module.exports = postEventSchema;

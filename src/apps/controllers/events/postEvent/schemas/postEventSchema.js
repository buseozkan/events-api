const yup = require("yup");
const selectUserVenue = require("./queries/selectUserVenue");

const postEventSchema = yup.object().shape({
  userId: yup
    .number()
    .required()
    .positive()
    .integer()
    .label("User ID")
    .typeError("User ID must be a number."),
  venueId: yup
    .number()
    .required()
    .positive()
    .integer()
    .label("Venue ID")
    .typeError("Venue ID must be a number.")
    .test(
      "doesVenueBelongToUser",
      "Venue must exist and belong to user.",
      function test(venueId) {
        const { userId } = this.parent;
        return selectUserVenue({ userId, venueId }).then(venue => {
          if (venue) {
            return true;
          }
          return false;
        });
      }
    )
});
module.exports = postEventSchema;

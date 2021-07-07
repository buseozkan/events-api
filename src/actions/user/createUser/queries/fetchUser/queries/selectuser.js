const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectUser = ({ email, password }) => submitQuery`
    SELECT 
    user_id, user_type, first_name, last_name, email, city, phone_number
    FROM users

    WHERE email = ${email}
    AND password = SHA2(CONCAT(${password}, ${process.env.PASSWORD_SALT}), 224);
`;

module.exports = getFirst(camelKeys(selectUser));

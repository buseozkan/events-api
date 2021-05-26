const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectUser = ({ email, password }) => submitQuery`
    SELECT 
        user_id,
        first_name,
        last_name,
        date_of_birth,
        email,
        address,
        address_line_1,
        address_line_2,
        postcode,
        city,
        town,
        state,
        country,
        phone_number,
        emergency_contact_name,
        contact_number,
        user_types.user_type_id,
        user_types.user_role
    FROM users
    LEFT JOIN user_types ON users.user_type_id = user_types.user_type_id
    WHERE email = ${email}
    AND password = SHA2(CONCAT(${password}, ${process.env.PASSWORD_SALT}), 224);
`;

module.exports = getFirst(camelKeys(selectUser));

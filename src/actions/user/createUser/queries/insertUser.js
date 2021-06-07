const { submitQuery, getInsertId } = require("~root/lib/database");

const insertUser = ({
  userType,
  firstName,
  lastName,
  email,
  password,
  city,
  phoneNumber
}) => submitQuery`
    INSERT INTO users (        
      user_type,
      first_name,
      last_name,
      email,
      password,
      city,
      phone_number
    )
    VALUES 
    (${userType},${firstName},${lastName},${email},SHA2(CONCAT(${password},${process.env.PASSWORD_SALT}), 224),${city},${phoneNumber})
       
`;

module.exports = getInsertId(insertUser);

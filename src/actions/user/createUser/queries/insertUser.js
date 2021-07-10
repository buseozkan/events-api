const { submitQuery, getInsertId } = require("~root/lib/database");

const insertUser = ({
  userId,
  firstName,
  lastName,
  email,
  password,
  city,
  phoneNumber
}) => submitQuery`
    INSERT INTO users (        
      user_id,
      first_name,
      last_name,
      email,
      password,
      city,
      phone_number
    )
    VALUES 
    (${userId},${firstName},${lastName},${email},SHA2(CONCAT(${password},${process.env.PASSWORD_SALT}), 224),${city},${phoneNumber})
       
`;

module.exports = getInsertId(insertUser);

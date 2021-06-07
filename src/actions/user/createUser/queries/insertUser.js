const { submitQuery, getInsertId } = require("~root/lib/database");

const insertUser = ({
  user_id,
  user_type,
  first_name,
  last_name,
  email,
  password,
  city,
  phone_number
}) => submitQuery`
    INSERT INTO users (        
      user_id,
      user_type,
      first_name,
      last_name,
      email,
      password,
      city,
      phone_number
    )
    VALUES 
    (${user_id},${user_type},${first_name},${last_name},${email},SHA2(CONCAT(${password},${process.env.PASSWORD_SALT}), 224),${city},${phone_number})
       
`;

module.exports = getInsertId(insertUser);

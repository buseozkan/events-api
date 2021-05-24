const { submitQuery, getInsertId } = require("~root/lib/database");

const insertHost = ({
  firstName,
  lastName,
  email,
  password,
  city,
  phoneNumber,
}) => submitQuery`
    INSERT INTO users (        
      first_name,
      last_name,
      email,
      password,
      city,
      phone_number,
    )
    VALUES 
    (${firstName},${lastName},${email},SHA2(CONCAT(${password},${process.env.PASSWORD_SALT}), 224),${city},${phoneNumber})
       
`;

module.exports = getInsertId(insertHost);

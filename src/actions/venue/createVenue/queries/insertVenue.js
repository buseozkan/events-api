const { submitQuery, getInsertId } = require("~root/lib/database");

const insertVenue = ({
  venue_type,
  venue_id,
  name,
  description,
  city,
  phone_number,
  work_hours,
  facebook,
  instagram,
  twitter,
  image
}) => submitQuery`
    INSERT INTO venues (        
  venue_type,
  venue_id,
  name,
  description,
  city,
  phone_number,
  work_hours,
  facebook,
  instagram,
  twitter,
  image
    )
    VALUES 
    (${venue_type},${venue_id},${name},${name},${description},${city},${phone_number}, ${work_hours}, ${facebook}, ${instagram}, ${twitter}, ${image})
       
`;

module.exports = getInsertId(insertVenue);

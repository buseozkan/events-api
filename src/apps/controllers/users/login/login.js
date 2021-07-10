/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-undef */

const jwt = require("jsonwebtoken");
const fetchUser = require("../../../../actions/user/createUser/fetchUser");

const login = async (req, res) => {
  const { email, password } = req.body;

  const { user } = await fetchUser({ email, password });

  if (user) {
    const accessToken = jwt.sign({ ...user }, process.env.JWT_SECRET, {
      expiresIn: "5y" // 5 year
    });

    res.json({
      accessToken
    });
  } else {
    res.status(401).send("Username or password incorrect");
  }
};

module.exports = login;

import bcrypt from "bcrypt";
const SALT_ROUND = 10;
const Users = require("../models").users;
const Users_Roles = require("../models").user_roles;

module.exports.signup = async (req, res) => {
  const { username, email, password, handphone } = req.body;

  let hashPassword = password;
  hashPassword = await bcrypt.hash(hashPassword, SALT_ROUND);
  try {
    const result = await Users.create(
      {
        user_name: username,
        user_email: email,
        user_password: hashPassword,
        user_handphone: handphone,
        user_roles: {
          usro_role_id: 5,
        },
      },
      {
        include: Users_Roles,
      }
    );
    const { user_name, user_email } = result.dataValues;
    res.send({ user_name, user_email });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// use sigin with token in authJWT
module.exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await Users.findOne({
      where: { user_email: email },
    });
    const { user_name, user_email, user_password } = result.dataValues;
    const compare = await bcrypt.compare(password, user_password);
    if (compare) {
      return res.send({ user_name, user_email });
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    return res.sendStatus(404);
  }
};

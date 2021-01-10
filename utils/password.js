const bcrypt = require("bcrypt");

async function encryptPassword(password) {
  const saltRounds = 10;
  const encryptPassword = await bcrypt.hashSync(password, saltRounds);
  return encryptPassword;
}

async function comparePassword(password, hashpassword) {
  const comparePassword = await bcrypt.compareSync(password, hashpassword);
  return comparePassword;
}

module.exports = {
  encryptPassword,
  comparePassword,
};

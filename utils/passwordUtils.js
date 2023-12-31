const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.hashPassword = (password) => {
  return bcrypt.hash(password, saltRounds);
};

exports.comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

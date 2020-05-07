const fs = require("fs");
const path = require("path");

const checkUserPassword = (userLogin, userPassword) => {
  const pathToUsersFile = path.resolve(__dirname, "..", "db", "users.json");

  const fileUsers = fs.readFileSync(pathToUsersFile);
  const users = JSON.parse(fileUsers);

  return users.some(
    (el) => el.login === userLogin && el.password === userPassword,
  );
};

module.exports = checkUserPassword;

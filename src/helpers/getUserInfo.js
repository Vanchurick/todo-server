const fs = require("fs");
const path = require("path");

const getUserInfo = (userLogin) => {
  const pathToUsersFile = path.resolve(__dirname, "..", "db", "users.json");

  const fileUsers = fs.readFileSync(pathToUsersFile);
  const users = JSON.parse(fileUsers);
  const user = users.find((el) => el.login === userLogin);

  return {id: user.id, login: user.login, toDoList: user.toDoList};
};

module.exports = getUserInfo;

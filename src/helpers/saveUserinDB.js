const fs = require("fs");
const path = require("path");
const shortid = require("shortid");

const saveUserInDB = (user) => {
  const pathToUsersFile = path.resolve(__dirname, "..", "db", "users.json");

  const userFile = fs.readFileSync(pathToUsersFile);
  const users = JSON.parse(userFile);

  let newUser = {id: shortid.generate(), ...user, toDoList: []};

  users.push(newUser);

  newUsers = JSON.stringify(users);

  fs.writeFileSync(pathToUsersFile, newUsers);

  return {id: newUser.id, login: newUser.login, toDoList: newUser.toDoList};
};

module.exports = saveUserInDB;

const fs = require("fs");
const path = require("path");
const shortid = require("shortid");

const addTaskToDB = (request) => {
  const pathToUsersFile = path.resolve(__dirname, "..", "db", "users.json");

  const fileUsers = fs.readFileSync(pathToUsersFile);
  const users = JSON.parse(fileUsers);

  users.map((user) => {
    if (user.id === request.id) {
      user.toDoList = [...request.tasks];
      return user;
    }
    return user;
  });

  fs.writeFileSync(pathToUsersFile, JSON.stringify(users));
};

module.exports = addTaskToDB;

const addTaskToDB = require("../helpers/addTaskToDB");
const bodyValidator = require("../db/requestBodyValidators/task");
const getUserInfo = require("../helpers/getUserInfo");

const addTask = (req, res) => {
  const isRequestBodyValid = bodyValidator.validate({...req.body});

  if (isRequestBodyValid.error) {
    const response = {
      status: "Unsuccess",
      error: isRequestBodyValid.error.details[0].message,
    };

    res.writeHead(400, {"Content-Type": "application/json"});
    res.end(JSON.stringify(response));
    return;
  }

  addTaskToDB(req.body);

  const user = getUserInfo(req.body.login);

  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({status: "Success", user}));
};

module.exports = addTask;

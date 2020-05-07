const isUserExistInDB = require("../helpers/isUserExistInDB");
const checkUserPassword = require("../helpers/checkUserPassword");
const getUserInfo = require("../helpers/getUserInfo");
const bodyValidator = require("../db/requestBodyValidators/loginAndRegisterUser");

const login = (req, res) => {
  const {login, password} = req.body;

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

  if (!isUserExistInDB(login)) {
    res.writeHead(400, {"Content-Type": "application/json"});
    res.end(JSON.stringify({status: "Unsuccess", error: "No user"}));
    return;
  }

  const isPasswordCorrect = checkUserPassword(login, password);

  if (!isPasswordCorrect) {
    res.writeHead(400, {"Content-Type": "application/json"});
    res.end(JSON.stringify({status: "Unsuccess", error: "Wrong password"}));
    return;
  }

  const userInfo = getUserInfo(login);

  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({status: "Success", userInfo}));
};

module.exports = login;

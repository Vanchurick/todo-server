const saveUserInDB = require("../helpers/saveUserinDB");
const bodyValidator = require("../db/requestBodyValidators/loginAndRegisterUser");
const isUserExistInDB = require("../helpers/isUserExistInDB");

const auth = (req, res) => {
  const {login} = req.body;

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

  if (isUserExistInDB(login)) {
    const response = {
      status: "Unsuccess",
      error: "User is exist in DB",
    };

    res.writeHead(400, {"Content-Type": "application/json"});
    res.end(JSON.stringify(response));
    return;
  }

  const newUser = saveUserInDB({...req.body});

  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({status: "Success", newUser}));
};

module.exports = auth;

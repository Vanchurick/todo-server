const express = require("express");
const apiRoutes = new express.Router();

const auth = require("./auth");
const login = require("./login");
const addTask = require("./addTask");

apiRoutes.post("/auth", auth);
apiRoutes.post("/login", login);
apiRoutes.post("/add", addTask);

module.exports = apiRoutes;

const startServer = require("./src/server");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5050;
}

startServer(port);

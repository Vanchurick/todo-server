const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./routes/router");

const startServer = (port) => {
  app.use(express.json());
  app.use(cors());

  app.use("/api", router);

  app.listen(port);

  console.log("Server was started at http://localhost:" + port);
};

module.exports = startServer;

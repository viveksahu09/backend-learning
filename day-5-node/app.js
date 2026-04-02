const express = require("express");
const logger = require("./middleware/logger");
const errorHandle = require("./middleware/errorHandler")

const app = express();

app.use(express.json());
app.use(logger);
app.use(errorHandle)

module.exports = app;

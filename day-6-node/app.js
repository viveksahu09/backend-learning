const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const errorHandle = require("./middleware/errorMiddleware");

// Routes
app.use("/users", userRoutes);

// Error Middleware (ALWAYS LAST)
app.use(errorHandle);

module.exports = app;
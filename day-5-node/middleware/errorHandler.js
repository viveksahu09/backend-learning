const errorHandler = (err, req, res, next) => {
  res.status(404).json({
    success: false,
    message: err.message || "Something went wrong",
  });
};

module.exports = errorHandler;

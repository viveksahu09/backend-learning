const users = require("../data/users");

// get all users
const getUsers = (req, res) => {
  res.json(users);
};

// get single user
const getUserById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    return next(error);
  }

  res.json(user);
};

// Delete user
const deleteUserById = (req, res, next) => {
  const id = parseInt(req.params.id);

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    const error = new Error("User not found");
    error.status = 404;
    return next(error);
  }

  users.splice(index, 1);

  res.json({ message: "User deleted successfully" });
};

module.exports = { getUsers, getUserById, deleteUserById };

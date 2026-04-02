// Fake database (temporary)
let users = [
  { id: 1, name: "Vivek" },
  { id: 2, name: "Rahul" },
];

// Get all users
const getUsers = (req, res) => {
  res.json(users);
};

// Get user by id
const getUserById = (req, res, next) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    const error = new Error("User not found");
    return next(error);
  }

  res.json(user);
};

// create new user
const createUser = (req, res) => {
  console.log(req.body);

  const { name } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// Delete user
const deleteUser = (req, res, next) => {
  console.log("Params:", req.params);

  const id = parseInt(req.params.id);

  const originalLength = users.length;
  users = users.filter((user) => user.id !== id);

  if (users.length === originalLength) {
    const error = new Error("User not found");
    return next(error);
  }

  res.send("User deleted");
};

// Update user
const updateUser = (req, res, next) => {
  console.log(req.body);

  const id = parseInt(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    const error = new Error("User not found");
    return next(error);
  }

  // 🔥 Get new name from body
  const { name } = req.body;

  // 🔥 Update user
  user.name = name;

  // 🔥 Send response
  res.json({
    message: "User updated successfully",
    user: user,
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};

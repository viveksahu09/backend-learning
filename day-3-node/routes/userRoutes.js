const {
  getAllUsers,
  getUserById,
  getProfile,
} = require("../controllers/userController");

function userRoutes(req, res, sendRespones) {
  const urlParts = req.url.split("/");

  // /users
  if (req.url === "/users" && req.method === "GET") {
    return getAllUsers(req, res, sendRespones);
  }

  // /users/:id (dynamic route)
  if (urlParts[1] === "users" && urlParts[2]) {
    const userId = urlParts[2];
    return getUserById(req, res, sendRespones, userId);
  }

  // /profile
  if (req.url === "/profile" && req.method === "GET") {
    return getProfile(req, res, sendResponse);
  }
}

module.exports = userRoutes;

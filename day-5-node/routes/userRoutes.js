const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser
} = require("../controllers/userController");

// Routes
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;

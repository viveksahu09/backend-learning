  const users = [
    { id: 1, name: "Vivek" },
    { id: 2, name: "Rahul" },
  ];

  function getAllUsers(req, res, sendRespones) {
    sendRespones(res, 200, users);
  }

  function getUserById(req, res, sendRespones, userId) {
    const user = users.find((u) => u.id === parseInt(userId));

    if (!user) {
      return sendRespones(res, 404, { message: "User not found" });
    }

    sendRespones(res, 200, user);
  }

  function getProfile(req, res, sendRespones) {
    const profile = users[0]; // assume logged-in user
    sendRespones(res, 200, profile);
  }

module.exports = {
  getAllUsers,
  getUserById,
  getProfile,
};
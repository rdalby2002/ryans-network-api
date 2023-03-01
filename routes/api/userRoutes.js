const router = require('express').Router();
const {
  getUsers,
  getOneUser,
  newUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(newUser);

// /api/users/:userId
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:user/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
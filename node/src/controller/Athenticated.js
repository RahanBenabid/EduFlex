const User = require("../models/User.js");

async function getUserById(req, res) {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { getUserById };
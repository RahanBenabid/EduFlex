const User = require("../models/User");
const bcrypt = require("bcrypt");

// GET request handler
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Server error' });
  }
};

// POST request handler
exports.signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res
    .status(200)
    .json({ message: "user added successfully", user: savedUser });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to register user" });
  }
};
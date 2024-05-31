const bcrypt = require("bcrypt")
const User = require("../models/User.js")
const { generateToken } = require("../utils/authUtils.js")

async function login (req, res) {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			console.log("user not found...")
			throw new Error("user not found");
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		console.log("pass:", isPasswordValid)
		if (!isPasswordValid) {
			throw new Error("invalid password!");
		}
		const token = generateToken(user)
		//console.log("token:", token)
		res.status(200).json({ user: user, token: token})
	} catch (e) {
		res.status(401).json({ message: "invalid credentials" })
	}
}

module.exports = { login }

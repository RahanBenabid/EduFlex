const User = require('../models/User.js')
const bcrypt = require("bcrypt")

async function createAdminAccount () {
	try{
		const existingAdmin = await User.findOne({email: 'admin@test.com'})
		if (existingAdmin) {
			console.log("admin account already exists");
		} else {
			const newAdmin = new User({
				username: "Admin",
				email: "admin@test.com",
				password: await bcrypt.hash("admin", 10),
				role: "admin",
			});
			await newAdmin.save();
			console.log("admin account created successfully")
		}
	} catch (error) {
		//console.log(error);
		console.error(e.message)
	}
}


module.exports = { createAdminAccount }
// Import the 'crypto' module
const crypto = require("crypto")

// Generate a random 32-byte secret key and convert it to a hexadecimal string
const secretKey = crypto.randomBytes(32).toString("hex")
// Export the secret key as a module
module.exports = { secretKey: secretKey }
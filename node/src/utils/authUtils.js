// Require the jwt library
const jwt = require("jsonwebtoken")

// Require the secret key from the configuration file
const { secretKey } = require("../configuration/jwtConfig.js")

// Define a function to generate a JWT token
function generateToken (user) {
  // Create the payload of the token
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };
  
  // Sign the token using the secret key and set the expiration time to 1 hour
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
}

// Define a function to generate a JWT token
function generateRefreshToken (user) {
  // Create the payload of the token
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };

  // Sign the token using the secret key and set the expiration time to 7 hours
  return jwt.sign(payload, secretKey, { expiresIn: "7h" });
}

function verifyToken(token) {
  // Verify the token using the secret key
  return jwt.verify(token, secretKey);
}

module.exports = { generateRefreshToken, generateToken, verifyToken };
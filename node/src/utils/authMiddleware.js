const jwt = require("jsonwebtoken")
const { secretKey } = require("../configuration//jwtConfig.js")

function authenticateToken(req, res, next) {
	const authHeader = req.header("Authorization")
	if(!authHeader) {
		return res.status(401).json({ message : "unauthorized: missing token"})
	}
	const [bearer, token] =authHeader.split(" ")
	if(bearer !== "Bearer" | !token) {
		return res.status(401).json({ message: "unauthorized: invalid token format" })
	}
	jwt.verify(token, secretKey, (err, user) => {
		if(err) return res.status(403).json({ message :"forbidden: invalid token" })
		req.user = user;
		next();
	})
}


module.exports = { authenticateToken }
const jwt = require("express-jwt")
const jwksRsa = require("jwks-rsa")
const config = require('./config')

const authConfig = {
	domain: config.DOMAIN,
	audience: config.AUDIENCE
}

const checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
	}),

	audience: authConfig.audience,
	issuer: `https://${authConfig.domain}/`,
	algorithm: ["RS256"]
})

module.exports = checkJwt
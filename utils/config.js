require('dotenv').config()

let DOMAIN = process.env.REACT_APP_DOMAIN
let CLIENTID = process.env.REACT_APP_CLIENTID
let AUDIENCE = process.env.REACT_APP_AUDIENCE

let PORT = 3001

module.exports = {
	DOMAIN,
	CLIENTID,
	AUDIENCE,
  	PORT
}
require('dotenv').config()

const DOMAIN = process.env.REACT_APP_DOMAIN
const CLIENTID = process.env.REACT_APP_CLIENTID
const AUDIENCE = process.env.REACT_APP_AUDIENCE
const THEMOVIEDB = process.env.REACT_APP_THEMOVIEDB_KEY

let MONGODB_URI = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') {
	MONGODB_URI = process.env.MONGODB_URI_TEST
}

const PORT = 3001

module.exports = {
	DOMAIN,
	CLIENTID,
	AUDIENCE,
	PORT,
	AUDIENCE,
	THEMOVIEDB,
	MONGODB_URI
}
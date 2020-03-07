const express = require('express')
const bodyParser = require('body-parser')
const checkJwt = require('./utils/middleware')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())

app.use(checkJwt)

app.get("/api/external", (req, res) => {
	res.send({
		msg: "Your Access Token was successfully validated!"
	})
})

module.exports = app
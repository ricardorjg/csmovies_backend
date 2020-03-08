const express = require('express')
const bodyParser = require('body-parser')
const checkJwt = require('./utils/middleware')
const moviesDbrouter = require('./controllers/moviesDb')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())

//app.use(checkJwt)

app.use('/api/moviesdb/', moviesDbrouter)

module.exports = app
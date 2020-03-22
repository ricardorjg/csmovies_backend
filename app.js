const express = require('express')
const bodyParser = require('body-parser')

const dbConnect = require('./utils/dbConnect')
const checkJwt = require('./utils/checkJwt')
const moviesDbRouter = require('./controllers/moviesDb')
const moviesReviewRouter = require('./controllers/moviesReview')
const unknownEndpoint = require('./utils/unknownEndpoint')
const errorHandler = require('./utils/errorHandler')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())

if (process.env.NODE_ENV !== 'test') {
	app.use(checkJwt)
}

app.use('/api/moviesdb/', moviesDbRouter)
app.use('/api/reviews/', moviesReviewRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app
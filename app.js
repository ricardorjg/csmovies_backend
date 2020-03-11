const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const config = require('./utils/config')
const checkJwt = require('./utils/checkJwt')
const moviesDbRouter = require('./controllers/moviesDb')
const moviesReviewRouter = require('./controllers/moviesReview')
const unknownEndpoint = require('./utils/unknownEndpoint')
const errorHandler = require('./utils/errorHandler')

mongoose
	.connect(config.MONGODB_URI, { useNewUrlParser: true })
  	.then(() => {
    	console.log('connected to MongoDB')
  	})
  	.catch((error) => {
    	console.log('error connection to MongoDB:', error.message)
  	})

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())

//app.use(checkJwt)

app.use('/api/moviesdb/', moviesDbRouter)
app.use('/api/reviews/', moviesReviewRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app
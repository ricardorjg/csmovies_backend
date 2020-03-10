const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const config = require('./utils/config')
const checkJwt = require('./utils/middleware')
const moviesDbRouter = require('./controllers/moviesDb')
const moviesReviewRouter = require('./controllers/moviesReview')

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

module.exports = app
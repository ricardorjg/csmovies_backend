const mongoose = require('mongoose')
const config = require('./config')

async function dbConnect () {
	await mongoose
			.connect(config.MONGODB_URI, { useNewUrlParser: true })
			.then(() => {
				console.log('connected to MongoDB')
			})
			.catch((error) => {
				console.log('error connection to MongoDB:', error.message)
			})
}

module.exports = dbConnect
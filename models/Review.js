const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
	movie_id: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	rating: Number
})

reviewSchema.set('toJSON', {
	transform: (document, returnedObj) => {
	  returnedObj.id = returnedObj._id.toString()
	  delete returnedObj._id
	}
})

module.exports = mongoose.model('Review', reviewSchema)

const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
	creation_date: {
		type: Date,
		default: Date.now
	},
	movie_id: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	rating: Number,
	comment: String
})

reviewSchema.set('toJSON', {
	transform: (document, returnedObj) => {
	  returnedObj.id = returnedObj._id.toString()
	  delete returnedObj._id
	  delete returnedObj.__v
	}
})

module.exports = mongoose.model('Review', reviewSchema)

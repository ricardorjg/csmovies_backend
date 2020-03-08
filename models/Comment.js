const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	movie_id: {
		type: Number,
		required: true
	},
	comment: String
})

commentSchema.set('toJSON', {
	transform: (document, returnedObj) => {
		returnedObj.id = returnedObj._id.toString()
		delete returnedObj._id
	}
})

module.exports = mongoose.model('Comment', commentSchema)

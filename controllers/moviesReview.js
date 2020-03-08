const moviesReviewRouter = require('express').Router()

const config = require('../utils/config')
const Review = require('../models/Review')
const Comment = require('../models/Comment')

moviesReviewRouter.post('/userrating/:movieid', async(req, res, next) => {

	const body = req.body

	const filter = {
		movie_id: req.params.movieid,
		email: body.email
	}

	const review = await Review.findOne(filter)
	res.status(200).json(review)
})

moviesReviewRouter.get('/comments/:movieid', async(req, res, next) => {
	const movieid = req.params.movieid
	const comments = await Comment.find({ movie_id: parseInt(movieid) })
	res.status(200).json(comments)
})

// moviesReviewRouter.post('/:movieid', async (req, res, next) => {

// 	const body = req.body
// 	const movie_id = req.params.movie_id

// 	const reviewDB = await Review.findOne({ movie_id })

// 	if (!reviewDB) {
// 		reviewDB = new Review({
// 			movie_id,
// 			rating: body.rating || 0,
// 			comments: [] 
// 		})
// 	}

// 	if (body.comment && body.email) {
// 		reviewDB.comments = reviewDB.comments.concat()
// 	}

// 	reviewDB.
// })

module.exports = moviesReviewRouter
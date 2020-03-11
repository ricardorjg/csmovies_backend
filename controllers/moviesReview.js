const moviesReviewRouter = require('express').Router()

const config = require('../utils/config')
const Review = require('../models/Review')

moviesReviewRouter.get('/:movieid', async(req, res, next) => {
	const movie_id = req.params.movieid
	const reviews = await Review.find({ movie_id: movie_id })
	res.status(200).json(reviews)
})

moviesReviewRouter.post('/:movieid/save', async(req, res, next) => {

	const movie_id = req.params.movieid
	const body = req.body

	const review = new Review({
		email: body.email,
		movie_id: movie_id,
		rating: body.rating,
		comment: body.comment
	})

	try {
		const savedReview = await review.save()
		res.status(200).json(savedReview)
	} catch (err)  {
		next(err)
	}
})

module.exports = moviesReviewRouter
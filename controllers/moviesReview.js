const moviesReviewRouter = require('express').Router()

const config = require('../utils/config')
const Review = require('../models/Review')

moviesReviewRouter.get('/:movieid', async (req, res, next) => {
	const movie_id = req.params.movieid
	const reviews = await Review.find({ movie_id: movie_id })
	res.status(200).json(reviews)
})

moviesReviewRouter.post('/:movieid/save', async (req, res, next) => {

	const movie_id = req.params.movieid
	const body = req.body

	try {

		let review = new Review()

		if (body.id) {
			review = await Review.findById(body.id)
			if (!review) {
				return res.status(400).json({ error: 'Id not found' })
			}
		} else {
			review.email = body.email
			review.movie_id = movie_id
		}

		review.rating = body.rating
		review.comment = body.comment

		const savedReview = await review.save()
		res.status(200).json(savedReview)
	} catch (err)  {
		next(err)
	}
})

module.exports = moviesReviewRouter
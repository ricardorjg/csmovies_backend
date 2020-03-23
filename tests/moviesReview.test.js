const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Review = require('../models/Review')

const api = supertest(app)

beforeEach(async () => {

	await Review.deleteMany({})

	let review1 = new Review({
		movie_id: 76341,
		email: 'dedrozulu12@gmail.com',
		rating: 5,
		comment: 'such a simple yet well executed movie'
	})
	await review1.save()

	let review2 = new Review({
		movie_id: 76341,
		email: 'mariaper@yahoo.com',
		rating: 2,
		comment: 'Im sorry but explotions and violence its not my thing'
	})
	await review2.save()
})

test('reviews are returned as json', async () => {
	await api
			.get('/api/reviews/76341')
			.expect(200)
			.expect('Content-Type', /application\/json/)
})

test('There are 2 reviews', async () => {
	const reviews = await api
			.get('/api/reviews/76341')

	expect(reviews.body.length).toBe(2)
})

test('User is able to modify rating', async () => {

	let reviewDb = await Review.findOne({ email: 'mariaper@yahoo.com', movie_id: 76341 })

	await api
			.post('/api/reviews/76341/save')
			.send({
				email: 'mariaper@yahoo.com',
				rating: 4,
				comment: 'I think i see the appealing now',
				id: reviewDb.id
			})

	reviewDb = await Review.findOne({ email: 'mariaper@yahoo.com', movie_id: 76341 })
	expect(reviewDb.comment).toContain('I think i see the appealing now')
})

afterAll(() => {
	mongoose.connection.close()
})
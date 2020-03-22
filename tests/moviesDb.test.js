const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('movies are returned as json', async () => {
	await api
			.get('/api/moviesdb/')
			.query({ page: 1, year: 2011 })
			.expect(200)
			.expect('Content-Type', /application\/json/)
})

test('movie is found', async () => {
	const response = await api
						.get('/api/moviesdb/39254')
	expect(response.body.original_title).toBe('Real Steel')
})

test('Error is throw when movie not found', async () => {
	api
		.get('/api/moviesdb/39254000000')
		.expect(404)
})

afterAll(() => {
	mongoose.connection.close()
})
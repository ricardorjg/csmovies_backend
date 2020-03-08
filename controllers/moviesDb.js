const axios = require('axios') 
const moviesDbrouter = require('express').Router()
const config = require('../utils/config')

moviesDbrouter.get('/', async (req, res, next) => {

	const { page, year } = req.query

	const url = `https://api.themoviedb.org/3/discover/movie?api_key=${config.THEMOVIEDB}&page=${page}&primary_release_year=${year}`
	try {
		const movies = await axios.get(url);
		res.status(200).json(movies.data)
	} catch (err) {
		next(err)
	}
})

moviesDbrouter.get('/:id_movie', async (req, res, next) => {

	const id_movie = req.params.id_movie

	const url = `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${config.THEMOVIEDB}`
	try {
		const movies = await axios.get(url);
		res.status(200).json(movies.data)
	} catch (err) {
		next(err)
	}
})

module.exports = moviesDbrouter

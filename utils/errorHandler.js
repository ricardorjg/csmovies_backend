const errorHandler = (err, request, res, next) => {
  
	if (err.name === 'ValidationError') {
		return res.status(400).json({ err: err.message })
	}
  
	next(err)
}

module.exports = errorHandler
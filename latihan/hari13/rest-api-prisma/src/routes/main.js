const express = require('express')
const { createMovie } = require('../controllers/movieController')
const { readMovie } = require('../controllers/movieController')
const { readMovieById } = require('../controllers/movieController')
const { updateMovie } = require('../controllers/movieController')
const { deleteMovie } = require('../controllers/movieController')
const { basicAuth } = require('../middleware/basicauth')
const { validationBodyMovies } = require('../middleware/validation')
const router = express.Router()

router.post('/movie', createMovie)
router.get('/movie',readMovie)
router.get('/movie/:id',readMovieById)
router.put('/movie/:id',updateMovie)
router.delete('/movie/:id',deleteMovie)

module.exports = router
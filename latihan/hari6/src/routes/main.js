const express = require('express')
const { createMovie } = require('../controllers/movieController')
const router = express.Router()


router.post('/movie', createMovie)

module.exports = router
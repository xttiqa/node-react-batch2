const express = require('express')
const { createNilai } = require('../controllers/nilaiController')
const { readNilai } = require('../controllers/nilaiController')
const { updateNilai } = require('../controllers/nilaiController')
const { deleteNilai } = require('../controllers/nilaiController')
const { readNilaiById } = require('../controllers/nilaiController')
const router = express.Router()

router.post('/nilai', createNilai)
router.get('/nilai', readNilai)
router.get('/nilai/:id', readNilaiById)
router.put('/nilai/:id', updateNilai)
router.delete('/nilai/:id', deleteNilai)

module.exports = router
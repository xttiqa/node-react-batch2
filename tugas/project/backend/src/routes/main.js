const express = require('express')
const { createProduk } = require('../controllers/produkController')
const router = express.Router()

router.post('/produk', createProduk)

module.exports = router
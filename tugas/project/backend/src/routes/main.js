const express = require('express')
const {createProduk, readProduk, readProdukById, updateProduk, deleteProduk} = require('../controllers/produkController')
const {createCustom} = require('../controllers/customController')
const router = express.Router()

// PRODUK
router.post('/produk', createProduk)
router.get('/produk', readProduk)
router.get('/produk/:id', readProdukById)
router.put('/produk/:id', updateProduk)
router.delete('/produk/:id', deleteProduk)

// CUSTOM
router.post('/custom', createCustom)


module.exports = router
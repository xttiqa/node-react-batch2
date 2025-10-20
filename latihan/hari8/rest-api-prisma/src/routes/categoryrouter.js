const express = require('express')
const { basicAuth } = require('../middleware/basicauth')
const { createCategory, readCategory, deleteCategory} = require('../controllers/categoryController')
const routerCategory = express.Router()

routerCategory.post('/category', basicAuth, createCategory)
routerCategory.get('/category', basicAuth, readCategory)
routerCategory.delete('/category/:id', basicAuth, deleteCategory)

module.exports = routerCategory
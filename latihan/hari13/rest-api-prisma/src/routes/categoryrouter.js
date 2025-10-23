const express = require('express')
const { basicAuth } = require('../middleware/basicauth')
const { createCategory, readCategory, deleteCategory} = require('../controllers/categoryController')
const routerCategory = express.Router()

routerCategory.post('/category', createCategory)
routerCategory.get('/category', readCategory)
routerCategory.delete('/category/:id', deleteCategory)

module.exports = routerCategory
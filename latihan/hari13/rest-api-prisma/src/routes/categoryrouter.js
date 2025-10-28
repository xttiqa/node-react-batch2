const express = require('express')
const { basicAuth } = require('../middleware/basicauth')
const { createCategory, readCategory, deleteCategory, readCategoryById, updateCategory} = require('../controllers/categoryController')
const { route } = require('./main')
const routerCategory = express.Router()

routerCategory.post('/category', createCategory)
routerCategory.get('/category', readCategory)
routerCategory.delete('/category/:id', deleteCategory)
routerCategory.get('/category/:id', readCategoryById)
routerCategory.put('/category/:id', updateCategory)

module.exports = routerCategory
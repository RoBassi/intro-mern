const express = require('express')
const upload = require('../libs/storage')
const { addProduct, getProducts } = require('../controllers/productControllers')
const api = express.Router()

api.post('/products', upload.single('image'), addProduct)
api.get('/products', getProducts)

module.exports = api

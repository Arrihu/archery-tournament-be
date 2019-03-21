const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.get('/', controller.CategoryList.get)
router.get('/get/:id', controller.CategoryGet.get)
router.post('/create', controller.CategoryCreate.post)
router.post('/update', controller.CategoryUpdate.post)
router.get('/delete/:id', controller.CategoryDelete.get)

module.exports = router
const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.get('/', controller.ArrowList.get)
router.get('/get/:id', controller.ArrowGet.get)
router.post('/create', controller.ArrowCreate.post)
router.post('/update', controller.ArrowUpdate.post)
router.get('/delete/:id', controller.ArrowDelete.get)


module.exports = router
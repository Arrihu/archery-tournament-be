const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.get('/', controller.TargetList.get)
router.get('/get/:id', controller.TargetGet.get)
router.post('/create', controller.TargetCreate.post)
router.post('/update', controller.TargetUpdate.post)
router.get('/delete/:id', controller.TargetDelete.get)

module.exports = router
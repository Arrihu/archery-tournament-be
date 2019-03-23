const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.get('/', controller.ArcherList.get)
router.get('/get/:id', controller.ArcherGet.get)
router.post('/create', controller.ArcherCreate.post)
router.post('/update', controller.ArcherUpdate.post)
router.get('/delete/:id', controller.ArcherDelete.get)

module.exports = router
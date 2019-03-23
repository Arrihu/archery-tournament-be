const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.get('/', controller.ClubList.get)
router.get('/get/:id', controller.ClubGet.get)
router.post('/create', controller.ClubCreate.post)
router.post('/update', controller.ClubUpdate.post)
router.get('/delete/:id', controller.ClubDelete.get)

module.exports = router
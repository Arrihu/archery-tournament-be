const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.get('/', controller.ScoreList.get)
router.get('/get/:id', controller.ScoreGet.get)
router.post('/create', controller.ScoreCreate.post)
router.post('/update', controller.ScoreUpdate.post)
router.get('/delete/:id', controller.ScoreDelete.get)

module.exports = router
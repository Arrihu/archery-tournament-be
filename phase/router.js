const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.get('/', controller.PhaseList.get)
router.get('/get/:id', controller.PhaseGet.get)
router.post('/create', controller.PhaseCreate.post)
router.post('/update', controller.PhaseUpdate.post)
router.get('/delete/:id', controller.PhaseDelete.get)

module.exports = router
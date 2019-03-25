const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.get('/', controller.EventOrganizerList.get)
router.get('/get/:id', controller.EventOrganizerGet.get)
router.post('/create', controller.EventOrganizerCreate.post)
router.post('/update', controller.EventOrganizerUpdate.post)
router.get('/delete/:id', controller.EventOrganizerDelete.get)

module.exports = router
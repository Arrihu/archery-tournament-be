const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.get('/', controller.BowList.get)
router.get('/get/:id', controller.BowGet.get)
router.post('/create', controller.BowCreate.post)
router.post('/update', controller.BowUpdate.post)
router.get('/delete/:id', controller.BowDelete.get)


module.exports = router
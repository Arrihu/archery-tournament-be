var express = require('express')
var router = express.Router()
var controller = require('./controller')


router.get('/', controller.UserList.get)
router.get('/get/:id', controller.UserGet.get)
router.post('/create', controller.UserCreate.post)
router.post('/update', controller.UserUpdate.post)
router.get('/delete/:id', controller.UserDelete.get)

module.exports = router;
let express = require('express')
let router = express.Router()
let controller = require('./controller')


router.get('/', controller.RoleList.get)
router.get('/get/:id', controller.RoleGet.get)
router.post('/create', controller.RoleCreate.post)
router.post('/update', controller.RoleUpdate.post)
router.get('/delete/:id', controller.RoleDelete.get)

module.exports = router;
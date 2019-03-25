const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get('/', controller.SetupList.get);
router.get('/get/:id', controller.SetupGet.get);
router.post('/create', controller.SetupCreate.post);
router.post('/update', controller.SetupUpdate.post);
router.get('/delete/:id', controller.SetupDelete.get);


module.exports = router;
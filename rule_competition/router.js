const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.get('/', controller.RuleCompetitionList.get)
router.get('/get/:id', controller.RuleCompetitionGet.get)
router.post('/create', controller.RuleCompetitionCreate.post)
router.post('/update', controller.RuleCompetitionUpdate.post)
router.get('/delete/:id', controller.RuleCompetitionDelete.get)

module.exports = router
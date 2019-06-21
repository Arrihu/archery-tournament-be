const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', controller.SetupTournamentList.get)
router.post('/create', controller.SetupTournamentCreate.post)

module.exports = router
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const userRoute = require('./user/router')
const roleRoute = require('./role/router')
const bowRoute = require('./bow/router')
const arrowRoute = require('./arrow/router')
const ruleRoute = require('./rule_competition/router')
const categoryRoute = require('./category/router')
const scoreRoute = require('./score/router')
const phaseRoute = require('./phase/router')
const targetRoute = require('./target/router')
const archerRoute = require('./archer/router')
const clubRoute = require('./club/router')
const eventOrganizerRoute = require('./event_organizer/router')
const tournamentRoute = require('./tournament/router')
const setupTournamentRoute = require('./setup_tournament/router')

const app = express();
const port = 3333

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

app.use('/user', userRoute)
app.use('/role', roleRoute)
app.use('/bow', bowRoute)
app.use('/arrow', arrowRoute)
app.use('/rule', ruleRoute)
app.use('/category', categoryRoute)
app.use('/score', scoreRoute)
app.use('/phase', phaseRoute)
app.use('/target', targetRoute)
app.use('/archer', archerRoute)
app.use('/club', clubRoute)
app.use('/event-organizer', eventOrganizerRoute)
app.use('/tournament', tournamentRoute)
app.use('/setup-tournament', setupTournamentRoute)

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/test/login.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
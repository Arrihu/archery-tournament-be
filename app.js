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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
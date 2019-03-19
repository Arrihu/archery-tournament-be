const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./user/router')
const roleRoute = require('./role/router')

const app = express();
const port = 3333

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/user', userRoute)
app.use('/role', roleRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
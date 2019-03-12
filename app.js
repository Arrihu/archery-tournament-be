const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3333

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
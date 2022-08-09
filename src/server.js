const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser=require('body-parser');
const routes = require('./config/router')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extend: false}))
app.use(express.json())
app.use(cors())
app.use(routes)


app.listen(3042, () => {
    console.log('server start ')
})
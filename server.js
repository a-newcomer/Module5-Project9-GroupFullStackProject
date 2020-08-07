const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.listen(9000, () => {
    console.log('Server running on port 9000')
})
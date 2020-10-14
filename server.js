
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Create App

const app = express()

// MB database

mongoose.connect(process.env.DATABASE, {
    // warnings 
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology: true
})

.then(() => console.log('DB success connected'))
.catch( err => console.log(`DB Connection Error ${err}`))


// middlewares

app.use(morgan('dev')); // to see all the request from the database as get, put etc..
//app.use(bodyParser.json({limit:'2mb'}))
app.use(bodyParser.json());
app.use(cors());

//Route

app.get('/api', (req,res) => {
    res.json({
        data:'you hit node ap update'
    })
})


// Port to work

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`The server is running on port ${port}`))
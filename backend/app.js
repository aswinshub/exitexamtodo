const express = require('express');
const morgan = require ('morgan');
const app= express();
require('dotenv').config();
app.use(morgan('dev'));
const cors = require('cors')


const todRoute = require('./router/todoRoute')


app.use(cors());
app.use('/todo',todRoute)


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log (`Listening PORT ${PORT} `)
    
})
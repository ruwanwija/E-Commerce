const express = require('express')
const mongoose = require('mongoose')
const cookieparser = require('cookie-parser')
const cors = require('cors')

//create a database connection 
mongoose
  .connect('mongodb+srv://ruwanwijayasundara:EjWRKqek1vs8bYDn@cluster0.c1nqu.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB is Connected'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));



const app=express()
const  PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'http://localhost:5173',
        methods  : ['GET','POST','DELETE','PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);

app.use(cookieparser());
app.use(express.json);
app.listen(PORT,()=>console.log(`Server is now running on port ${PORT}`))
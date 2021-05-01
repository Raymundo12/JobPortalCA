/*Part of the code has been sourcedand instructured from 
Title: moodle live classes
Author:Mikhael
 title: How To Build A Markdown Blog Using Node.js, Express, And MongoDB 
Author: Web Dev Simplified Availability: https://www.youtube.com/watch?v=1NrHkjlWVhM*/
//dependencies,references
const http = require('http');
//const axios = require('axios');
logger = require('morgan');
cors = require('cors');
bodyParser = require('body-parser');
mongoose = require('mongoose');
multer = require('multer');
const dotenv = require('dotenv');
express = require('express');//const
const Book = require('./models/books')//books is where my schema is

var app = express();
const bookartRouter = require('./routes/bookarts')//bookarts js class
const methodOverride = require('method-override')// package used to update and delete a document via post request.
app.use(methodOverride('_omethod'))// using the method in the app.//edit class/ delete function

//INSTANCES listen and push
app.use(express.urlencoded({ extended: false}))//enable us to use URL-encoded data with the querystring library.
var port = process.env.PORT || 8000;//port default
dotenv.config();
//MIDDLEWARES
app.set('view engine', 'ejs')
app.use('/bookarts', bookartRouter)//bookarts js class import export



app.use(express.static('views/bookart')) // express static makes my folder public to access my css and javascript for my html page.

//making a get request html page
app.get('/', async  (req,res)=> {
   const partsbooks = await Book.find();  // find my data from my REST database collection with the model and assign it on to the const Book

    res.render('bookart/index' , {partsbooks: partsbooks})// This will render all the database collection data which was assigned on to the const Book
})

app.use(bodyParser.json())//JSON /first
app.use(logger('tiny'));//morgan//knows the n point of requests and responses between the user and controller: GET / 404 139 - 1.760 ms//POST /hello 200 126 - 1.586 ms
//app.use(require('./routes'));//last


app.listen(port, function(err){
    console.log('Listening on port: ' + port);//my listening
});

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })//for avoid the deprecation Warning at the terminal
    .then((result) => console.log('MongoDB is successfully connected'))
    .catch((err) => console.log(err));



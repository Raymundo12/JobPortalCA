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
const Part = require('./models/bookartmodel')

const bookartRouter = require('./routes/bookarts')
const methodOverride = require('method-override')// package used to update and delete a document via post request.

//INSTANCES listen and push
var app = express();
app.use(express.urlencoded({ extended: false}))//enable us to use URL-encoded data with the querystring library.
var port = 8000;//port default
dotenv.config();
//MIDDLEWARES
app.set('view engine', 'ejs')
app.use('/bookarts', bookartRouter)



app.use(methodOverride('_omethod'))// using the method in the app. 
app.use(express.static('views/bookart')) // making my folder public to access my css and javascript for my html page.

//html file homepage
app.get('/', async  (req,res)=> {// making a get request
   const parts = await Part.find();  // this will find all my data from my database collection with the help of model and assign it on to the const parts

    res.render('bookart/index' , {items: items})// This will render all the database collection data which was assigned on to the const parts
})

// //Render html file homepage
// app.get('/', async  (req,res)=> {// making a get request
//    const parts = await Part.find();  // this will find all my data from my database collection with the help of model and assign it on to the const parts

//     res.render('bookart/index' , {parts: parts})// This will render all the database collection data which was assigned on to the const parts
// })

app.use(bodyParser.json())//JSON /first
app.use(logger('tiny'));//morgan//knows the n point of requests and responses between the user and controller: GET / 404 139 - 1.760 ms//POST /hello 200 126 - 1.586 ms
//app.use(require('./routes'));//last


app.listen(port, function(err){
    console.log('Listening on port: ' + port);//print outuput por runner
});

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('MongoDB is successfully connected'))
    .catch((err) => console.log(err));


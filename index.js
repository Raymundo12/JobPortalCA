const http = require('http');
const axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');
mongoose = require('mongoose');

var app = express();
var port = 8000;

//middllewares
app.use(bodyParser.json())//JSON
app.use(logger('tiny'));//morgan//knows the n point of requests and responses between the user and controller: GET / 404 139 - 1.760 ms//POST /hello 200 126 - 1.586 ms
app.use(require('./routes'));
// //option one setting routes
// app.get('/hello', (req, res) => {//type  on the browse exactly what you wrote here
//     res.json({message: "Hello yahh" });//name=message value=Hello yahh
//     //res.send("Hello yahh");//changed it to SEND
//     //res.send(users.join('\n'));
// });
//**********************************************************************************
// //option 2 - setting routes and passing parameters//for put at the front end
// app.get('/hello/:foo/:bar', (req, res) => {//type  on the browse exactly what you wrote here
//     res.json({message: "Hello yahh", data: [
//         req.params.foo,
//         req.params.bar
//     ]});
// });

// //post using postman//sending some data
// app.post('/hello',(req,res) => {
//     res.json({result: 'Post was sent',data: req.body});
// })

// http.createServer((req, res)=>{
// //res.write("Hello world, Helo Steph you got it right this time!!!uhuuUu \n"); // write a response
// res.write(users.join("\n"));//displays the list of users on the page/SEPARATOR
// //res.write(emails.join("\n\n"));
// res.end(); //end the response
// }).listen(8000); // listen for requests on port 8000
//**********************************************************
// let users = [];//names of users will be stored here
// axios.get("https://jsonplaceholder.typicode.com/users")//sending get request
// .then(({ data }) => {
//     users = data.map(user => user.email);//get only the user.name of the users and store in array->in this case/could be user.email
//     console.log(users)//printing the data from http/name of the users on the console of my node
// })
// .catch(error=>{
//     console.log(error);
// });
let users = [];//names of users will be stored here
//let emails = [];
(async function getNames(){//syncronized minimize the errors and delays
    try{
        //const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");//external server
        const {data} = await axios.get("https://swapi.dev/api/people/");//star wars //external server


        //users = data.results.map(user=>user.name);//map=populate to the users
        //emails = data.map(email=>email.email);//map=populate to the users
       console.log(users)//print to the browser
    }catch (error) {
        console.log(error);
    }
}) ();

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});
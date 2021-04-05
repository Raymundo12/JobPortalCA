const http = require('http');
const axios = require('axios');

http.createServer((req, res)=>{
//res.write("Hello world, Helo Steph you got it right this time!!!uhuuUu \n"); // write a response
res.write(users.join("\n"));//displays the list of users on the page/SEPARATOR
res.write(emails.join("\n\n"));
res.end(); //end the response
}).listen(8000); // listen for requests on port 8000

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
let emails = [];
(async function getNames(){//syncronized minimize the errors and delays
    try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        users = data.map(user=>user.name);//map=populate to the users
        emails = data.map(email=>email.email);//map=populate to the users
       console.log(users)//print to the browser
    }catch (error) {
        console.log(error);
    }
}) ();
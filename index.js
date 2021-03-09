const http = require('http');
http.createServer((req, res)=>{
res.write("Hello world, Helo Steph you got it right this time!!!uhuuUu \n"); // write a response
res.end(); //end the response
}).listen(8000); // listen for requests on port 8000
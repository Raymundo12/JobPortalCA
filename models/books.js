//his is my model data representing my collection in mongo atlas called books..and the fields below will be generated automatically
var mongoose = require('mongoose');//to interact with the MongoDBatlas database called books 

var bookSchema = new mongoose.Schema({ 
    item: { type: String, unique: true},
    price: { type: Number},
    name: { type: String},
     
},
{ timestamps: true }
);

module.exports = mongoose.model('books', bookSchema);//important 'books creates a table inside mongo atlas and push my bookSchema retrieved);
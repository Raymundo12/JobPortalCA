//his is my model data representing my collection in mongo atlas called books..and the fields below will be generated automatically
var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({ 
    item: { type: String, unique: true},
    price: { type: Number},
    name: { type: String},
     
},
{ timestamps: true }
);

module.exports = mongoose.model('books', bookSchema);//'books create a table inside mongo atlas and push my bookSchema retrieved);
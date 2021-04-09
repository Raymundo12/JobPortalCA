var mongoose = require('mongoose');

//SCHEMA
var userSchema = new mongoose.Schema({ 
    email: { type: String, unique: true, lowercase: true},//special atributte//is the primary key
    password: String,
    username: String,
    gender: { 
        type: String,
        enum: ['MALE', 'FEMALE']
    },
    phone: Number 
},
    {timestamps: true}

);

module.exports = mongoose.model('User', userSchema);
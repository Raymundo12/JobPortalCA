var User = require('./models/user')

//CREATE/ADD A SINGLE USER
exports.createUser = function(req, res) { 
    var User = new User(req.body);
    newuser.save(function (err, user) { //SAVE
        if (err) { 
            res.status (400).json(err);
        }

        res.json(user); 
});
};

//READ ALL USER
exports.getUsers = function(req, res) {
  User.find({}, function (err, users) {//MQL CODE for read a single user
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};

//FIND USER
exports.getUser = function(req, res) {
  User.findOne({_id: req.params.id}, function (err, users) {//MQL CODE for find a single user
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};
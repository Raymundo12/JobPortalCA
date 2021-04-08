//request logic
exports.getWorld = function(req,res){
    res.json({result: 'Hello world from controller'});
}

exports.getWorldParams = function(req,res) {
    res.json({message: "Hello yahh", data: [
        req.params.foo,
        req.params.bar
    ]});
};

//post using postman//sending some data
exports.postWorld = function(req,res) {
    res.json({result: 'Post was sent', data: req.body});
};

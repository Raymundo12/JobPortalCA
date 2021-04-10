//reference /const dont change
const UPLOAD_PATH = require('./routes').UPLOAD_PATH,
Image = require('./models/image'),
path = require('path'),
fs = require('fs'),
del = require('del');

exports.uploadImage = function(req,res)
{
    let newImage = new Image();//instance of image
    newImage.filename = req.file.filename;
    newImage.originalName = req.file.originalname;
    newImage.desc = req.body.desc;
    newImage.save(err => {
        if (err){
            return res.sendStatus(400);//in case goes wrong
        }
        res.status(201).send({newImage})//send the image to the server
    });

};
exports.getImages = function(req, res) {
    Image.find({}, '-__v')
    .lean()
    .exec((err, images) => {
        if (err) {
            return res.sendStatus(400);
        }

        for (let i = 0; i < images.length; i++) {
            var img = images[i];
            img.url = req.protocol + '://' + req.get('host') + '/images/' + img._id;
        }

        res.json(images);
    });
};




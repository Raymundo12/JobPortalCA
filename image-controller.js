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
    newImage.sace(err => {
        if (err){
            return res.sendStatus(400);
        }
        res.status(201).send({newImage})
    });

}




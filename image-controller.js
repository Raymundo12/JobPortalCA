// //reference /const dont change
// const UPLOAD_PATH = require('./routes').UPLOAD_PATH,
// Image = require('./models/image'),
// path = require('path'),
// fs = require('fs'),
// del = require('del');

// //ADD A IMAGE
// exports.uploadImage = function(req,res)
// {
//     let newImage = new Image();//instance of image
//     newImage.filename = req.file.filename;
//     newImage.originalName = req.file.originalname;
//     newImage.desc = req.body.desc;
//     newImage.save(err => {
//         if (err){
//             return res.sendStatus(400);//in case goes wrong
//         }
//         res.status(201).send({newImage})//send the image to the server
//     });

// };
// //GET ALL IMAGES
// exports.getImages = function(req, res) {
//     Image.find({}, '-__v')
//     .lean()
//     .exec((err, images) => {
//         if (err) {
//             return res.sendStatus(400);
//         }

//         for (let i = 0; i < images.length; i++) {
//             var img = images[i];
//             img.url = req.protocol + '://' + req.get('host') + '/images/' + img._id;
//         }

//         res.json(images);
//     });
// };
// //GET ONE IMAGE
// exports.getImage = function(req, res) {
//     let imgId = req.params.id;

//     Image.findById(imgId, (err, image) => {
//         if (err) {
//             return res.sendStatus(400);
//         }

//         res.setHeader('Content-Type', 'image/jpeg');
//         fs.createReadStream(path.join(UPLOAD_PATH, image.filename)).pipe(res);
//     });
// };
// //DELETE IMAGE
// exports.deleteImage = function(req, res) {
//     let imgId = req.params.id;

//     Image.findByIdAndRemove(imgId, (err, image) => {
//         if (err && image) {
//             return res.sendStatus(400);
//         }

//         del([path.join(UPLOAD_PATH, image.filename)]).then(deleted => {
//             res.sendStatus(200);
//         });
//     });
// };





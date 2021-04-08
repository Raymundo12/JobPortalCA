const express = require('express'),
router = express.Router();

//reference into routes from the request logic intem-controller
var itemCtrl = require('./item-controller'),

userCtrl = require('./user-controller');

router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.post('/hello', itemCtrl.postWorld);

//option 2 - setting routes and passing parameters//for put at the front end
// router.get('/hello/:foo/:bar', (req, res) => {//type  on the browse exactly what you wrote here
//     res.json({message: "Hello yahh", data: [
//         req.params.foo,
//         req.params.bar
//     ]});
// });

// //post using postman//sending some data
// router.post('/hello',(req,res) => {
//     res.json({result: 'Post was sent',data: req.body});
// });

module.exports = router;//exports


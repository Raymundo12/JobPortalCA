const express = require('express'),
router = express.Router();


//option 2 - setting routes and passing parameters//for put at the front end
router.get('/hello/:foo/:bar', (req, res) => {//type  on the browse exactly what you wrote here
    res.json({message: "Hello yahh", data: [
        req.params.foo,
        req.params.bar
    ]});
});

//post using postman//sending some data
router.post('/hello',(req,res) => {
    res.json({result: 'Post was sent',data: req.body});
});

module.exports = router;//exports
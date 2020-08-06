const express = require('express');
let router = express.Router();

router.use(function (req, res, next) {
    console.log(req.url,'@',Date.now());
    next();
})
router
    .route('/cars')
    .get( (req, res)=>{
        //things/cars
        res.send('Hi get /things/cars')
    })
    .post( (req, res)=>{
        res.send('Hi post /things/cars')
    });

router
    .route('/cars/:carid')
    .get( (req, res)=>{
        res.send('Hi get /things/cars:carid' + req.params.carid)
    })
    .put( (req, res)=>{
        res.send('Hi put /things/cars:carid' + req.params.carid)
    });


module.exports = router;
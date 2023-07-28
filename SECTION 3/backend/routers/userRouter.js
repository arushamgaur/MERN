const express = require('express');
const router = express.Router();
const model = require('../models/userModel');
const { Model } = require('mongoose');


router.post('/add', (req, res)=> {
    
    console.log(req.body);
    //saving the data to mongodb
    new model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res)=> {
    res.send('Response from user getall');
});

router.get('/getbyid', (req, res)=> {
    res.send('Response from user getbyid');
});
module.exports = router;
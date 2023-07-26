const express = require('express');
const router = express.Router();

router.get('/add', (req, res)=> {
    res.send('Response from product add');
});

router.get('/getall', (req, res)=> {
    res.send('Response from product getall');
});

router.get('/getbyid', (req, res)=> {
    res.send('Response from product getbyid');
});

module.exports = router;
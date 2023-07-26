const express = require('express');
const router = express.Router();

router.post('/add', (req, res)=> {
    res.send('Response from user add');
    console.log(req.body);
});

router.get('/getall', (req, res)=> {
    res.send('Response from user getall');
});

router.get('/getbyid', (req, res)=> {
    res.send('Response from user getbyid');
});
module.exports = router;
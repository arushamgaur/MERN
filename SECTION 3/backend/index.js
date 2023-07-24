//inporting express
const express = require("express");
//initialize experess app
const app = express();
//local host server
const port = 5000;

//creating routes
app.get('/', (req, res) => {
    res.send('Response from express server');
});

// /home
app.get('/home', (req, res)=>{
    res.send('Home');
})
// /add
app.get('/add', (req, res)=>{
    res.send('Add');
})
//starting the server
app.listen(port , () => {
    console.log('Express Server Started Successfully');
});
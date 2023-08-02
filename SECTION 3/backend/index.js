//inporting express
const express = require("express");
//initialize experess app
const app = express();
//local host server
const port = 5000;

const cors = require('cors');

//import routers
const UserRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productRouter');
const UtilRouter = require('./routers/util')

//middleware to convert json data to javascript objects
app.use(cors({
    origin : ['https://localhost:3000']
}));
app.use(express.json());

//middlewares
app.use('/user', UserRouter);
app.use('/product', ProductRouter);
app.use('/util', UtilRouter);

//creating routes
app.get('/', (req, res) => {
    res.send('Response from express server');
});

// /home
app.get('/home', (req, res)=>{
    res.send('Response from Home');
});

// /add
app.get('/add', (req, res)=>{
    res.send('Response from Add');
});

//starting the server
app.listen(port , () => {
    console.log('Express Server Started Successfully');
});
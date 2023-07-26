const mongoose = require('mongoose');

const url = 'mongodb+srv://arushamgour:Arvi2111@arushamgaur.qmahwm7.mongodb.net/MYDATABASE?retryWrites=true&w=majority'

// asynchronous function - returns a promise
mongoose.connect(url)
.then((result) => {
    console.log('connected to mongoose');
}).catch((err) => {
    console.log(err);
});

console.log('hey yo');
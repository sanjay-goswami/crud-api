const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crud-api',(err)=>{
    if(!err) console.log("Database connection successful");
    else console.log("Error in database connection: "+ err);
});
const mongoose = require('mongoose');
const db = require('../config/config');
const autoIncrement = require('mongoose-auto-increment');

// student schema
studentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    branch:{
        type:String,
        require:true
    },
    skill:{
        type:String,
        require:true
    }
},{
    versionKey:false
});
autoIncrement.initialize(mongoose.connection);
studentSchema.plugin(autoIncrement.plugin,{
    model:'Student_details',
    field:'RollNo',
    startAt:1,
    incrementBy:1
});

const student = mongoose.model("Student_details",studentSchema);
module.exports = student;
const Student = require('../../models/student');

module.exports.create = (req,res)=>{
    let student_data = new Student(req.body);
    console.log(student_data);
    student_data.save((err)=>{
        if(err)
        res.status(401).json({success:0,message:err});
        else
        res.status(201).json({success:1,message:"Student details created!"});
    });
};

module.exports.find = (req,res)=>{
    let data = req.query;
    if(data.size == undefined)
    data.size = 10;
    if(data.page == undefined)
    data.page=1;
    data.page = parseInt(data.page);
    data.size = parseInt(data.size);
    skip  = (data.page-1)*data.size;
    if(data.RollNo != undefined){
        Student.find({RollNo:data.RollNo},(err,result)=>{
            if(err)
            res.status(401).json({success:0,message:err});
            else
                res.status(200).json({success:1,message:result});
        })
    }
    else if(data.skill != undefined){
        Student.find({skill:data.skill},{},{limit:data.size,skip:skip},(err,result)=>{
            if(err)
            res.status(401).json({success:0,message:err});
            else
                res.status(200).json({success:1,message:result});
        })
    }
    else if(data.branch != undefined){
        Student.find({branch:data.branch},{},{limit:data.size,skip:skip},(err,result)=>{
            if(err)
            res.status(401).json({success:0,message:err});
            else
                res.status(200).json({success:1,message:result});
        })
    }
    else{
        Student.find({},{},{limit:data.size,skip:skip},(err,result)=>{
            if(err)
            res.status(401).json({success:0,message:err});
            else
                res.status(200).json({success:1,message:result});
        })
    }
}

module.exports.updateByRollNo = (req,res)=>{
    let update = req.body;
    let filter = req.query;
    Student.findOneAndUpdate(filter,update,{new:true},(err,result)=>{
        if(err)
            res.status(401).json({success:0,message:err});
            else
                res.status(200).json({success:1,message:result});
    })
}

module.exports.deleteByRollNo = (req,res)=>{
    let data = req.query;
    Student.findOneAndDelete(data,(err)=>{
        if(err)
            res.status(401).json({success:0,message:err});
            else
                res.status(200).json({success:1,message:"Student Details deleted Successfully!"});
    })
}
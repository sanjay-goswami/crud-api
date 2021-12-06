const express = require('express');
const app = express();
const port =  process.env.PORT || 8000;

app.use(express.json());
app.get('/test',(req,res)=>{
    res.send('API is working now!');
});
app.use('/api',require('./Router'));

app.listen(port,(err)=>{
    if(err)
    console.log(err);
    console.log(`API server is listening on ${port}`);
});
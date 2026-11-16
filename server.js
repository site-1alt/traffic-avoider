const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/arcadeDB');
const user = mongoose.model('user',{
    username : String,
    password : String
});


app.post('/signup', async(req, res)=>{
    const{ username, password} = req.body;
    const exists = await user.findOne({username})
    if (exists) return res.send({ok:false, msg:"Username Taken !"});

    await user.create({username, password});  

    res.send ({ok:true, msg:"Registered"});


});
app.post('/login', async(req, res)=>{
    const {username, password} = req.body;
    const founduser = await user.findOne({username, password});
    if (!founduser){ return res.send({ok:false, msg:'Wrong Password'});}
    res.send({ok:true});



});
app.listen (3000, () =>{

    console.log("server running on port 3000")
});
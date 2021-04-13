var express=require('express');
var ejs= require('ejs');
var app=express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
var users={
    name:"abc",
    email:"abc@gmail.com"
}

    res.render('../views/home',{data:users}

    )
})


const port=process.env.PORT || 3000

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running at http://localhost:"+port);
    }
})
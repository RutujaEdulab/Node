const express=require('express');
const reqFilter=require('./Multi')
const app=express();
const route=express.Router();





// app.use(reqFilter);
app.use(reqFilter);
app.get('/',(req,resp)=>{
    resp.send("Welcome This is home page");
});

app.get('/Users',(req,resp)=>{
    resp.send("Welcome this is User Page");
});

route.get('/About',(req,resp)=>{
    resp.send("Welcome To About Us Page");
})

route.get('/Contact',(req,resp)=>{
    resp.send("If you have any query Please contact us");
})

app.use('/',route);
app.listen(4500);
const express=require('express');
const app=express();
app.set('view engine','ejs');
app.get('/',(req,resp)=>{
    resp.render('Profile');

});

app.listen(5600);
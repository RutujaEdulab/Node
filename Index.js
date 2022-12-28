const express=require('express');
const app=express();
app.get("",(req,resp)=>{
    // console.log("data sent by browser =>>>" ,req.query.name);
    resp.send(`
    <h1>Hello,this is home page</h1>
    <a href="/about">Go to About Page</a>
    `);
})

app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="Username" value="${req.query.name}" />
    <button>Click Me</button>
    <a href="/">Go to Home Page</a>
    `);
})

app.get('/data',(req,resp)=>{
    resp.send(`
    [{name:Rutuja,email:rutuja@edulab.in},
    {name:vandana,email:vandana@edulab.in},
{name:Roopa,emnail:roopa@edulab.in}]
    `);
})
app.listen(5000);
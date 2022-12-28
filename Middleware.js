const express = require('express');
const app = express();

//This Is middleware
const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please Provide Age");
    }
    else if (req.query.age < 18) {
        resp.send("You cann't access this page");
    }
    else {
        next();
    }
}

//this is route.
app.use(reqFilter);

app.get('/', (req, resp) => {
    resp.send("Welcome to Home page");


});

app.get('/Users', (req, resp) => {
    resp.send("Welcome to Users page");
})
app.listen(5000);
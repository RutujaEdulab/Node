const express = require('express');
const path = require('path');


const app = express();
const publicpath = path.join(__dirname, 'public');


app.get('/', (req, resp) => {
    resp.sendFile(`${publicpath}/index.html`);
})

app.get('/aboutme', (req, resp) => {
    resp.sendFile(`${publicpath}/about.html`);
})

app.get('*', (req, resp) => {
    resp.sendFile(`${publicpath}/Nopage.html`);
})
app.listen(5500);
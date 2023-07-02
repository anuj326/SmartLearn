const express = require('express');
const db = require('./mongoose/mongoose');
const { userData } = require('./controllers/userData');
const { login } = require('./controllers/login');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', function(req, res){
    return res.send('Welcome HOme')
})

app.post('/register', userData);
app.post('/signin',login)



app.listen(port,function(err){
    if(err){
        console.log("Expres server error");
        return;
    }
    console.log("express sevr is running");
})
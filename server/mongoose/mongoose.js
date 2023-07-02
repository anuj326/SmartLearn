const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/smartLearn');

const db = mongoose.connection;

db.on('error',function(){
    console.log("error connecting to mongo db")
})

db.once('open', function(){
    console.log('Successfully connected to MOngo Db')
})

module.exports = db;
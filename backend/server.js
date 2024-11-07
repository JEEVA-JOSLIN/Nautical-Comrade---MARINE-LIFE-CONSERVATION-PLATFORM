var express= require('express');
var server=express();
var routes=require('./routes/routes');

const mongoose = require('mongoose');
const cors=require('cors');
const MONGOURI = "mongodb://localhost:27017/marine";

mongoose.connect(MONGOURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("Connected to MongoDB");
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("error")
    }
    else
    {
        console.log("started")
    }
});



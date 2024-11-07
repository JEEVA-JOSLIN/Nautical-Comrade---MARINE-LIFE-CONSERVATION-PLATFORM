const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/marine');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("Connected to MongoDB");
});
app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for each HTML page
app.get('http://localhost:4200/register', function (req, res) {
    console.log("register")
    res.set({
        'Access-control-Allow-Origin': '*'
    });

});
app.post('http://localhost:4200/register', function (request, response) {
    var password = request.body.password;
    var email = request.body.email;
    db.collection('user').findOne({ email: email }, function (err, existingUser) {
        if (err) {
            console.error(err);
            return response.status(500).send("Error checking existing user");
        }
        if (existingUser) {
            console.log("User with this email already exists");
            return response.status(400).send("User with this email already exists");
        }
        var data = {
            "email": email,
            "password": password
        }
        db.collection('user').insertOne(data, function (err, collection) {
            if (err) {
                console.error(err);
                return response.status(500).send("Error registering user");
            }
            console.log("Inserted Successfully.");
        });
    });
});
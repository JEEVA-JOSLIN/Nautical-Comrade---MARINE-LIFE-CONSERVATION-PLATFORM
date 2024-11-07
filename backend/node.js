const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Yumyard');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("Connected to MongoDB");
});



app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for each HTML page
app.get('/', function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('index.html');
});

app.post('/register', function (request, response) {
    var password = request.body.password;
    var email = request.body.email;
    db.collection('Register').findOne({ email: email }, function (err, existingUser) {
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
        db.collection('Register').insertOne(data, function (err, collection) {
            if (err) {
                console.error(err);
                return response.status(500).send("Error registering user");
            }
            console.log("Inserted Successfully.");
            return response.redirect('./login.html');
        });
    });
});

app.post("/login", function (request, response) {
    var password = request.body.password;
    var email = request.body.email;

    db.collection('Register').findOne({ email: email }, function (err, user) {
        if (err) {
            console.error(err);
            return response.status(500).send("Error logging in");
        }

        if (!user) {
            console.log("Invalid email or password");
            return response.status(401).send("Invalid email or password");
        }

        // Check if the provided password matches the stored password
        if (user.password !== password) {
            console.log("Invalid password");
            return response.status(401).send("Invalid email or password");
        }

        console.log("Login Successfully");
        return response.redirect('./items.html');
    });
});

app.post('/add-to-cart', function (req, res) {
    const itemName = req.body.name;
    const itemPrice = req.body.price;

    db.collection('CartItem').insertOne({ name: itemName, price: itemPrice }, function (err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send("Error adding item to cart");
        }
        console.log("Item added to cart successfully");
        return res.status(200).send("Item added to cart");
    });
});


const PORT = 5002;

app.listen(PORT, function () {
    console.log(`Server is running at http://localhost:${PORT}`);
});


if (process.env.NODE_ENV !== 'production') {
    const browserSync = require('browser-sync');
    browserSync({
        proxy: 'localhost:5002', 
        files: ['public/**/*'], 
        open: false,
        notify: false
    });
}

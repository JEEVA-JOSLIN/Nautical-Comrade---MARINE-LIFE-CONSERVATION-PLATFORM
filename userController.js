var userService = require('./userServices');

var getDataControllerfn = async (req, res)=>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({"status":true,"data":empolyee});
}

var createUserControllerfn = async (req,res)=>
{
    console.log(req.body);
    var status = await userService.createUserDBService(req.body);
    console.log(status);
    if(status)
    {
        console.log("User created");
        res.send({"status": true , "message":"User created"});

    }
    else{
        res.send({"status":false, "message":"Error creating user"});
    }

}
 var logfun= async(request,response) =>
 {
    console.log(request.body);
    console.log("LOGGING IN");
    var password = request.body.password;
    var email = request.body.email;
    const mongoose = require('mongoose');
const MONGOURI = "mongodb://localhost:27017/marine";
mongoose.connect(MONGOURI);
const db = mongoose.connection;
    db.collection('Register').findOne({ email: email }, function (err, user) {
        if (err) {
            console.error(err);
            return response.status(500).send("Error logging in");
        }
        if (!user) {
            console.log("Invalid email or password");
            return response.send("Invalid email or password");
        }
        // Check if the provided password matches the stored password
        if (user.password !== password) {
            console.log("Invalid password");
            return response.send({"message":"Invalid email or password"});
        }
        response.send({"status": true , "message":"Login success"});
   }  );
    
}


var adminlogfun= async(request,response) =>
 {
    console.log(request.body);
    console.log("LOGGING IN");
    var password = request.body.password;
    var email = request.body.email;
    const mongoose = require('mongoose');
const MONGOURI = "mongodb://localhost:27017/marine";
mongoose.connect(MONGOURI);
const db = mongoose.connection;
    db.collection('admin').findOne({ email: email }, function (err, user) {
        if (err) {
            console.error(err);
            return response.status(500).send("Error logging in");
        }
        if (!user) {
            console.log("Invalid email or password");
            return response.send("Invalid email or password");
        }
        // Check if the provided password matches the stored password
        if (user.password !== password) {
            console.log("Invalid password");
            return response.send({"status": true,"message":"Invalid email or password"});
        }
        response.send({"status": true , "message":"Login success"});
   }  );
    
}


var retrievedata= async(request,response) =>
 {
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    mongoose.connect(MONGOURI);
    const db = mongoose.connection;
    const users = await db.collection('profile').find({}).toArray();
    response.status(200).json(users);
}
var leader= async(request,response) =>
 {
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    mongoose.connect(MONGOURI);
    const db = mongoose.connection;
    const users = await db.collection('Register').find({}).toArray();
    response.status(200).json(users);
}


var removeUser = async (request, response) => {
    console.log("Removing user...");
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    const userId = request.params.userId; // Get userId from URL params
    console.log("User ID:", userId);
    try {
        await mongoose.connect(MONGOURI);
        const db = mongoose.connection;
        const user = await db.collection('profile').findOneAndDelete({ email: userId });
        console.log("User removed successfully:", user.value);
        response.status(200).json({ message: "User removed successfully", user: user.value });
    } catch (error) {
        console.error("Error removing user:", error);
        response.status(500).json({ error: "Error removing user" });
    } 
};
var removeevent = async (request, response) => {
    console.log("Removing user...");
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    const userId = request.params.userId; // Get userId from URL params
    console.log("User ID:", userId);
    try {
        await mongoose.connect(MONGOURI);
        const db = mongoose.connection;
        const user = await db.collection('event').findOneAndDelete({ eventname: userId });
        console.log("User removed successfully:", user.value);
        response.status(200).json({ message: "Event removed successfully", user: user.value });
    } catch (error) {
        console.error("Error removing user:", error);
        response.status(500).json({ error: "Error removing event" });
    } 
};

/*var register= async(request,response) =>
 {
    console.log(request.body);
    var name=request.body.name;
    var password = request.body.password;
    var email = request.body.email;
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    mongoose.connect(MONGOURI);
    const db = mongoose.connection;
    db.collection('Register').findOne({ email: email }, function (err, existingUser) {
        if (err) {
            console.error(err);
            return response.status(500).send({"message":"Error checking existing user"});
        }
        if (existingUser) {
            console.log("User with this email already exists");
            response.send({"status": true , "message":"User with this email already exists"});
            return response.send({"message":"Error checking existing user"});
        }
        var data = {
            "name":name,
            "email": email,
            "password": password
        }
        db.collection('Register').insertOne(data, function (err, collection) {
            if (err) {
                console.error(err);
                return response.status(500).send({"message":"Error registering user"});
            }
        });
        response.send({"status": true , "message":"Registered Successfully"});
    });
    
}*/


var changePassword = async (request, response) => {
    console.log(request.body);
    var name = request.body.name;
    var email = request.body.email;
    var newPassword = request.body.newPassword;
    var confirmPassword = request.body.confirmPassword;
    if (newPassword !== confirmPassword) {
        return response.status(400).send("New password and confirm password do not match");
    }
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    mongoose.connect(MONGOURI);
    const db = mongoose.connection;
    db.collection('Register').findOneAndUpdate({ name: name, email: email }, { $set: { password: newPassword } }, { returnOriginal: false }, function (err, updatedUser) {
        if (err) {
            console.error(err);
            return response.status(500).send({"message":"Error updating password"});
        }
        if (!updatedUser) {
            console.log("User with this name and email not found");
            //response.send({"status": true,"message":"User with this name and email not found"});
            return response.status(500).send({"message":"User with this name and email not found"});
        }
        response.send({ "status": true, "message": "Password changed successfully" });
    });
}

var removeEvent = async (request, response) => {
    console.log("Removing user...");
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    const userId = request.params.userId; // Get userId from URL params
    console.log("User ID:", userId);
    try {
        await mongoose.connect(MONGOURI);
        const db = mongoose.connection;
        const user = await db.collection('event').findOneAndDelete({ eventname: userId });
        console.log("Event removed successfully:", user.value);
        response.status(200).json({ message: "Event removed successfully", user: user.value });
    } catch (error) {
        console.error("Error removing event:", error);
        response.status(500).json({ error: "Error removing event" });
    } 
};






const register = async (request, response) => {
    console.log(request.body);
    var name = request.body.name;
    var password = request.body.password;
    var email = request.body.email;
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    mongoose.connect(MONGOURI);
    const db = mongoose.connection;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    try {
        const existingUser = await db.collection('Register').findOne({ email: email });
        if (existingUser) {
            console.log("User with this email already exists");
            return response.status(200).json({ "status": false, "message": "User with this email already exists" });
        }
        if(!email.match(validRegex))
        {
            return response.status(200).json({ "status": false, "message": "Invalid Email" });
        }
        
        var data = {
            "name": name,
            "email": email,
            "password": password
        };
        var updata={
            "name":name,
            "email":email,
        };
        
        const result = await db.collection('Register').insertOne(data);
        const result1 = await db.collection('profile').insertOne(data);
        console.log("User registered successfully");
        response.status(200).json({ "status": true, "message": "Registered Successfully" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ "status": false, "message": "Error registering user" });
    }
}

const storeAlert = async (request, response) => {
    console.log(request.body);
    const subject = request.body.subject;
    const message = request.body.message;

    // MongoDB connection and setup
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    
    try {
        await mongoose.connect(MONGOURI);
        console.log("Connected to MongoDB");

        // Define schema for alerts
        const alertSchema = new mongoose.Schema({
            subject: String,
            message: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        });

        // Create model from schema
        const Alert = mongoose.model('Alert', alertSchema);

        // Create a new alert document
        const newAlert = new Alert({
            subject: subject,
            message: message
        });

        // Save the alert to the database
        await newAlert.save();
        console.log("Alert stored in the database");

        response.status(200).json({ "status": true, "message": "Alert stored successfully" });
    } catch (error) {
        console.error("Error storing alert:", error);
        response.status(500).json({ "status": false, "message": "Error storing alert in the database" });
    } 
};

const raise = async (request, response) => {
    console.log(request.body);
    const subject = request.body.subject;
    const message = request.body.message;
    const type = request.body.type;

    // MongoDB connection and setup
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    
    try {
        await mongoose.connect(MONGOURI);
        console.log("Connected to MongoDB");

        // Define schema for alerts
        const alertSchema = new mongoose.Schema({
            subject: String,
            message: String,
            type:String
        });

        // Create model from schema
        const Alert = mongoose.model('complaints', alertSchema);

        // Create a new alert document
        const newAlert = new Alert({
            subject: subject,
            message: message,
            type:type
        });

        // Save the alert to the database
        await newAlert.save();
        console.log("Alert stored in the database");

        response.status(200).json({ "status": true, "message": "Complaint raised  successfully" });
    } catch (error) {
        console.error("Error storing alert:", error);
        response.status(500).json({ "status": false, "message": "Error storing alert in the database" });
    } 
};

var findName = async (request, response) => {
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    const userId = request.body.email; // Get userId from URL params
    console.log("User ID:", userId);
    
    mongoose.connect(MONGOURI);
    const db = mongoose.connection;
    const projection = { _id: 0, name: 1, email: 1 };
    
    try {
        const result = await db.collection('Register').find({email: userId}).project(projection).toArray();
        
        if (result.length > 0) {
            response.status(200).json({ message: result[0].name, user: result[0].name });
        } else {
            response.status(404).json({ "status": false, "message": "User not found" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ "status": false, "message": "Error" });
    }
};


const userprofile = async (request, response) => {
    console.log(request.body);
    var name = request.body.name;
    var email = request.body.email;
    var firstname= request.body.fname;
    var lastname = request.body.lname;
    var gender = request.body.gender;
    var occupation = request.body.occu;
    var state = request.body.state;
    var district = request.body.district;
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    mongoose.connect(MONGOURI);
    const db = mongoose.connection;
    
    try {
        const existingUser = await db.collection('Register').findOne({ email: email });
        var data = {
            "name": name,
            "email": email,
            "firstname":firstname,
            "lastname": lastname,
            "gender": gender,
            "occupation": occupation,
            "state" :state,
            "district":district
            
        };
        
        if (existingUser) {
            await db.collection('profile').updateOne({ email: email }, { $set: data });
            console.log("User profile updated successfully");
          } else {
            await db.collection('profile').insertOne(data);
            console.log("New user profile created successfully");
          }
          
          response.status(200).json({ "status": true, "message": "Saved Successfully" });
        } catch (error) {
          console.error(error);
          response.status(500).json({ "status": false, "message": "Error" });
        }
}


const createevent = async (request, response) => {
    console.log(request.body);
    var name = request.body.eventname;
    var date= request.body.date;
    var time = request.body.time;
    var user =request.body.Organizer;
    var email=request.body.Email;
    var state=request.body.state;
    var beach=request.body.state;
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    mongoose.connect(MONGOURI);
    const db = mongoose.connection;
    
    try {
        var data = {
            "organizer":user,
            "email":email,
            "eventname": name,
            "date":date,
            "time": time,
            "state":state,
            "beach":beach,
            "participants":[]


        };
        
        const result = await db.collection('event').insertOne(data);
        console.log("User registered successfully");
        response.status(200).json({ "status": true, "message": "Saved Successfully" });
    } 
    catch (error) {
        console.error(error);
        response.status(500).json({ "status": false, "message": "Error " });
    }
}


const saveComplaint = async (request, response) => {

const multer = require('multer');


// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route to handle complaint submission
(req, res) => {
  const { subject, description ,image} = req.body;
  const imagePath = req.file ? req.file.path : '';

  // Save complaint to database or perform any other necessary actions
  // For demonstration, we'll just log the complaint details
  console.log('Complaint received:');
  console.log('Subject:', subject);
  console.log('Description:', description);
  console.log('Image Path:', imagePath);

  res.status(200).json({ status: true, message: 'Complaint submitted successfully!' });
}


}



var retrieveevent= async(request,response) =>
 {
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    mongoose.connect(MONGOURI);
    const db = mongoose.connection;
    const users = await db.collection('event').find({}).toArray();
    response.status(200).json(users);
}

const retrieveAlerts = async (request, response) => {
    // MongoDB connection and setup
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    
    try {
        await mongoose.connect(MONGOURI);
        console.log("Connected to MongoDB");

        // Define schema for alerts
        const db = mongoose.connection;
        const alerts = await db.collection('alerts').find({}).toArray();

        // Retrieve all alerts from the database

        console.log("Retrieved alerts from the database:", alerts);

        response.status(200).json(alerts);
    } catch (error) {
        console.error("Error retrieving alerts:", error);
        response.status(500).json({ "status": false, "message": "Error retrieving alerts from the database" });
    } 
};

var updateParticipants = async (request, response) => {
    console.log(request.body);
    var eventId = request.body.eventId;
    var action = request.body.action; // 'join' or 'unjoin'
    var currentUser = request.body.currentUser;

    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
        
        // Get reference to the MongoDB connection
        const db = mongoose.connection;
        
        // Find the event by ID
        const event = await db.collection('event').findOne({ eventname: eventId });
        if (!event) {
            return response.status(404).json({ message: 'Event not found' });
        }
        
        // Update participants based on action
        let updatedParticipants = event.participants || [];
        if (action === 'join') {
            if (!updatedParticipants.includes(currentUser)) {
                updatedParticipants.push(currentUser);
            }
        } else if (action === 'unjoin') {
            updatedParticipants = updatedParticipants.filter(participant => participant !== currentUser);
        } else {
            return response.status(400).json({ message: 'Invalid action' });
        }
        
        // Update participants in the database
        await db.collection('event').updateOne({eventname: eventId  }, { $set: { participants: updatedParticipants } });
        await db.collection('Register').updateOne({ name: currentUser }, { $push: { events: eventId } });
        // Send success response
        response.status(200).json({ success: true, message: `${action === 'join' ? 'Joined' : 'Unjoined'} successfully` });
    } catch (error) {
        console.error("Error updating participants:", error);
        response.status(500).json({ message: 'Server error' });
    }
};



var rf= async(request,response) =>
 {
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    mongoose.connect(MONGOURI);
    const db = mongoose.connection;
    const users = await db.collection('complaints').find({}).toArray();
    response.status(200).json(users);
}








var saveComplaints = async (request, response) => {
        const mongoose = require('mongoose');
        const MONGOURI = "mongodb://localhost:27017/marine";
        mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log("Connected to MongoDB");
        });
        const complaintSchema = new mongoose.Schema({
            subject: String,
            message: String,
            image: String  // Assuming image is stored as a URL
        });
        //const Complaint = mongoose.model('Complaint', complaintSchema);
        const { subject, message, image } = request.body;

        // Create a new complaint document
        const newComplaint = new Complaint({
            subject: subject,
            message: message,
            image: image
        });

        await newComplaint.save();

        response.status(200).json({ message: "Complaint saved successfully" });
   
}












var retrieveProfile = async (request, response) => {
    console.log("Retrieving profile");
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
        
        // Get reference to the MongoDB connection
        const db = mongoose.connection;
        
        // Retrieve profile data from MongoDB collection
        const profile = await db.collection('profile').findOne({ email: request.params.email });
        
        if (!profile) {
            return response.status(404).json({ message: 'Profile not found' });
        }
        console.log(profile);
        // Send profile data in response
        response.status(200).json(profile);
    } catch (error) {
        console.error("Error retrieving profile:", error);
        response.status(500).json({ message: 'Server error' });
    }
};

var retrievecomplaint= async(request,response) =>
 {
    const mongoose = require('mongoose');
    const MONGOURI = "mongodb://localhost:27017/marine";
    mongoose.connect(MONGOURI);
    const db = mongoose.connection;
    const users = await db.collection('complaints').find({}).toArray();
    response.status(200).json(users);
}









module.exports = { getDataControllerfn,rf,leader,retrievecomplaint,raise,createUserControllerfn,logfun,adminlogfun,retrievedata,removeUser,register,changePassword,findName,userprofile,createevent,retrieveevent,removeEvent,saveComplaint,saveComplaints,retrieveProfile,retrievedata,updateParticipants,storeAlert,retrieveAlerts};
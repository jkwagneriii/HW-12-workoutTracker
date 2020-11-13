const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

// If testing locally, make sure your mongodb server is running
// If testing locally - mongodb://localhost/workout
var MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://jakeWagner:12345@workouttracker.mskce.mongodb.net/workoutTracker?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false
})

// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});
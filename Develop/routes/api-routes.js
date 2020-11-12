const Workout = require("../models/workout")

// IMPORTANT "mongoose": "^5.3.16" 

module.exports = function(app){ 
    // https://mongoosejs.com/docs/models.html
    // See api.js for naming details

    // Workouts GET 
    app.get("/api/workouts",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    // Workouts POST
    app.post("/api/workouts", function(req,res){
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    })
}
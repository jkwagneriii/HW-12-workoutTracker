const Workout = require("../models/workout")

module.exports = function(app){ 
    // See api.js for details
    app.get("/api/workouts",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });
}
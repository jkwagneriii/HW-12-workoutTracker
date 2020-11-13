const Workout = require("../models/workout")

// IMPORTANT "mongoose": "^5.3.16" 

module.exports = function(app){ 
    // https://mongoosejs.com/docs/models.html
    // See api.js for naming details

    // Workouts GET 
    app.get("/api/workouts",function(req,res){  
        Workout.find()
        // indicating function scope
        // check 5 weeks ago
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
    });

    // Workouts GET -- Range
    app.get("/api/workouts/range",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    // Workouts POST -- Range 
    // Workout.create({})   
    app.post("/api/workouts/range",function (req,res){    
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });



    // Workouts PUT /workouts/:id  
    // Use {body, params}
    // Workout.findByIdAndUpdate 
    app.put("/api/workouts/:id",({body,params},res)=>{   
        Workout.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {new: true,runValidators:true }
        )
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });
}
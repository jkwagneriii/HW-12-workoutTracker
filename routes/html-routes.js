// PATH DEPENDENCY
var path = require("path");

module.exports = function(app){ 

  // Index Route  
  app.get("/",function(req,res){    
      res.sendFile(path.join(__dirname,"../public/index.html"));
  });
  
  // Exercise Route
  app.get("/exercise",function (req,res){   
      res.sendFile(path.join(__dirname,"../public/exercise.html"));
  });

  // Stats Route
  app.get("/stats",function(req,res){   
      res.sendFile(path.join(__dirname,"../public/stats.html"));
  });

}
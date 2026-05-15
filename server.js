import express from "express";


const app = express();


//TEST endpoint
app.get("/", 
    
    function (req, res) {
      res.send("Server is working"); 
    }
    );


app.listen(3000, 
    
    function() {
         console.log("Server is running"); 
        }
        
        );

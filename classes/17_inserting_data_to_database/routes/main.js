// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", {title: "Dynamic title"})
});

router.get("/about", (req, res) => {
    res.render("about.ejs")
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs")
}); 

router.get("/search_result", (req, res) => {
res.send("You searched for " + req.query.search_text);
}); 

router.get("/register", (req,res) => {
res.render("register.ejs");
});

router.post("/registered", (req,res) => {
res.send("Hello "+ req.body.first + " "+ req.body.last +", you are now registered!");
});

router.get("/addbook", (req,res) => {
res.render("bookadded.ejs");
});

router.post("/addbook", function (req, res, next) {   
// Create query  
let sqlquery = "INSERT INTO books (name, price) VALUES (?,?)";   
// Execute sql query    
let newrecord = [req.body.name, req.body.price];   
db.query(sqlquery, newrecord, (err, result) => { 
if (err) {   
    next(err);   
} else { 
    res.send(" This book is added to database, name: " + 
    req.body.name + " price " +       
    req.body.price); 
  }   
    });   
}); 

// Export the router object so index.js can access it
module.exports = router;

router.get("/list", function(req, res, next) {     
    // Query database to get all the books  
    let sqlquery = "SELECT * FROM books";  
    
    // Execute sql query  
    db.query(sqlquery, (err, result) => { 
        if (err) {   
            next(err);   
        } else { 
            res.render("list.ejs", {availableBooks: result});
        } 
    });  
});
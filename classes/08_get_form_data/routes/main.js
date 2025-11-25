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


// Export the router object so index.js can access it
module.exports = router;
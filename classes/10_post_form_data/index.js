// Set up express
const express = require ("express");
const app = express();
const port = 8081;

// Set the rendering engine for Express to EJS
app.set("view engine", "ejs");

// Start listening for HTTP requests
app.listen(port,
() => console.log(`Node server is running on port ${port}...`));

// Set up the body parser
app.use(express.urlencoded({ extended: true })); 

// Load the route handlers
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

// Add conection to database
const mysql = require ("mysql2")

// Define the database connection 
const db = mysql.createConnection ({ 
    host: 'localhost', 
    user: 'root', 
    password: '050896Br!@', 
    database: 'myBookshop' 
}) 

// Connect to the database 
db.connect((err) => { 
    if (err) { 
    throw err 
} 
console.log('Connected to database') 
}) 
global.db = db 
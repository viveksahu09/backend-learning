const express = require("express")

const app = express()
const PORT = 3000

// Middleware to read JSON
app.use(express.json());

// Test route
app.get("/", (req, res)=>{
    res.send("API is running...")
})

// Import routes
const userRoutes = require("./routes/userRoutes")

// use routes
app.use("/api/users", userRoutes)

// Error middleware 
const errorHandler = require("./middleware/errorHandler")
app.use(errorHandler)

// Start server 
app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
    
})
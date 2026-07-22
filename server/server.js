const express = require("express");

const app = express();

const PORT = 3000;


// Import Routes

const userRoutes = require("./routes/userRoutes");


// Middleware

app.use(express.json());
app.use(express.static("public"));


// Home Route

// app.get("/", (req, res) => {

//     res.send("Crypto RSI Tracker Backend is Running!");

// });


// API Routes

app.use("/api/users", userRoutes);


// Start Server

app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});
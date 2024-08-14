const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");

const app = express();
app.use(express.json());
app.use("/api",router);

mongoose.connect('mongodb+srv://admin:n9RbDECkC8XSYfyX@cluster0.5goon.mongodb.net/M_dashboard?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    app.listen(5001);
    console.log("Database is connected! Listening to localhost 5001");
})
.catch((err)=>console.log(err));
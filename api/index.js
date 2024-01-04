import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to MongoDB');
})
.catch((err) =>{
    console.log(err)
})

const app = express();

app.listen(3000, () =>{
    console.log("Server is live...")
})

// app.get('/', (req, res) =>{
//     res.json({
//         message: 'Hello World',
//     })
// }) // in stude of this can use like this below code

app.use('/api/user', userRoutes);


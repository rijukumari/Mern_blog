import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/connection.js';
import userRoutes from "./src/routes/user.route.js";
import blogRoutes from "./src/routes/blog.routes.js"
import cors from 'cors'

dotenv.config();
const app = express();

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT


app.use("/images",express.static('uploads'))
app.use('/blog',blogRoutes)
app.use('/user',userRoutes)

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running on port: ${PORT}`)
})


import  express  from "express";
import cookieParser from "cookie-parser";
import connectDB from "./db/index.js";
import cors from "cors"

import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT
const app = express();
app.use(cookieParser())


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Importing routes
import searchRoute from '../src/routes/search.route.js';
import citiesRoute from '../src/routes/cities.route.js';

 app.use("/Health",(req,res)=>res.send("OK"));
app.use("/api/v1/city",citiesRoute);
app.use("/api/v1/search",searchRoute);


connectDB().then(()=>{
    app.listen(PORT||8080, ()=>{
        console.log(`⚙️ Server is running at port : ${PORT}`); 
    })
})
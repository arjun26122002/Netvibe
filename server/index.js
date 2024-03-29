import express from "express";
import bodyparser from "body-parser";
import mongoose from 'mongoose'
import dotenv from "dotenv";
import cors from 'cors'
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from "./Routes/PostRoute.js"
import UploadRoute from './Routes/UploadRoute.js'

//Routes

const app = express();

//to serve images for public
app.use(express.static('public'))
app.use('/images', express.static('images'))

//MiddleWare
app.use(bodyparser.json({ limit: '30mb', extended: true }))
app.use(bodyparser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())


dotenv.config();

mongoose
    .connect(process.env.MONGO_DB,
        { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => app.listen(process.env.PORT, () => console.log(`Listening at ${process.env.PORT}`)))
    .catch((error) => console.log(error));


const api = require("../api/hello");
console.log("Debug started");
api({}, { json: (response) => console.log("RESPONSE", response) });
console.log("Debug ended");

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/posts', PostRoute)
app.use('/upload', UploadRoute)

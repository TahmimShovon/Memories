import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express ();


app.use(bodyParser.json( {limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

const CONNECTION_URL = process.env.MONGO_CONNECTION
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log("Server is running on port "+ PORT)));


// app.use((req, res, next) => {
//     console.log(`Incoming ${req.method} request to ${req.url}`);
//     next();
//   });
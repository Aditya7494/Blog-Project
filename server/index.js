import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';


import Connection from './database/db.js';
import Router from './routes/route.js'
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/',Router);

//if (process.env.NODE_ENV === "production") {
  //  app.use(express.static("client/build"));
//}

const PORT =  8000;

app.listen(PORT, () => console.log(`server is running successfully on PORT ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

//const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@blog-app-shard-00-00.9faug.mongodb.net:27017,blog-app-shard-00-01.9faug.mongodb.net:27017,blog-app-shard-00-02.9faug.mongodb.net:27017/?ssl=true&replicaSet=atlas-d0bv3n-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(USERNAME, PASSWORD);
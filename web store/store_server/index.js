import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";

// ENVIROMENT VARIABLES
import 'dotenv/config';

//USERS
import { searchUser } from "./tools/database.js";

"use-strinct";
const app = express();
const port = 3001;


// Middleware
"use-strinct";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('This has CORS enabled');
});

app.get('/', (req,res) => {
    res.sendStatus(200);
});

// USERS 

// GET ALL USERS
app.get("/users/all", async (req,res) => {
    // WE WILL NEED AN API-KEY AUTH FOR THIS ROUTE
    const user_apikey = req.headers['api-key']; // &auth-key=*********
    const dotenv_apikey = process.env.API_KEY;
    if (user_apikey === dotenv_apikey) {
        const all_users = await searchUser("all");
        res.json(all_users);
    } else {
        res.sendStatus(401);
    }
    
});
// CREATE USERS

// READ USERS

// UPDATE USERS

// DELETE USERS


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
  
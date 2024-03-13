import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";

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
    const all_users = await searchUser("all");
    res.json(all_users);
});
// CREATE USERS

// READ USERS

// UPDATE USERS

// DELETE USERS


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
  
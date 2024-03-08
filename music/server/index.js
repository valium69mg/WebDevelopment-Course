import express from "express";
import bodyParser from "body-parser";
import pg from "pg";


"use-strinct";
const app = express();
const port = 3000;

"use-strinct";
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "music",
    password: "admin",
    port: 5432,
  });

db.connect();

// ACCESS PG DATABASE TO RETRIEVE ALL ALBUMS
"use-strinct";
async function getAllAlbums() {
    var res = await db.query("SELECT * FROM albums");
    return res.rows;
};

"use-strict";
// ARGS IS A LIST WITH THE ARGUMENTS (CAN BE ALSO 1 ARGUMENT)
async function getFilteredAlbums(filter) {
    if (Object.keys(filter).length !== 1) {
        return [];
    }
    for (const [key, value] of Object.entries(filter)) {
        var column = key; 
        var content = filter[key];
    }
    console.log(typeof(column));
    console.log(typeof(content));
    if (column === 'name') {
        var res = await db.query("SELECT * FROM albums WHERE name = $1;",[content]);
    } else if (column === 'band') {
        var res = await db.query("SELECT * FROM albums WHERE band = $1;",[content]);
    } else if (column === 'genre') {
        var res = await db.query("SELECT * FROM albums WHERE genre = $1;",[content]);
    } else if (column === 'release_date') {
        return null;
    } else if (column === 'rating') {
        var res = await db.query("SELECT * FROM albums WHERE rating = $1;",[content]);
    }
    return res.rows;
}

// GET ATTRIBUTES OF AN OBJECT

var getKeys = function(obj){
    var keys = [];
    for(var key in obj){
       keys.push(key);
    }
    return keys;
 }


// Middleware
"use-strinct";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET ALL ALBUMS 
"use-strinct";
app.get("/albums/all", async (req, res) => {
    var data = await getAllAlbums();
    if (JSON.stringify(data) === "[]"){
        res.sendStatus(404);
    } else {
        res.json(data);
    }
  });


  // GET ALBUMS BASED ON 1 FILTER
"use-strinct";
app.get("/albums/filter", async (req,res) => {
    const filter = req.query;
    var data = await getFilteredAlbums(filter);
    res.json(data);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
  
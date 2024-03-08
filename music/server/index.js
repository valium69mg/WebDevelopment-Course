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


function getValueFromKey(object,tag) {
    // IF OUR OBJECT IS EMPTY 
    if (Object.keys(object) == []){
        return null;
    } else {
        for (const [key, value] of Object.entries(object)) {
            if (key === tag) {
                return value;
            }
          }
    }
}

"use-strict";
// ARGS IS A LIST WITH THE ARGUMENTS (CAN BE ALSO 1 ARGUMENT)
async function getFilteredAlbums(filter) {
    var arrayOfKeys = Object.keys(filter);
    var arrayOfvalues = Object.values(filter);
    // IF QUERY PARAMS ARE ONLY ONE 
    if (arrayOfKeys.length === 1) {
        var column = arrayOfKeys[0];
        var content = arrayOfvalues[0];
        var single_param_query = `SELECT * FROM albums WHERE ${column} = $1;`
        var res = await db.query(single_param_query,[content]);
    } else if (arrayOfKeys.length === 2) {
        // IF THE QUERY PARAMS ONLY INCLUDE A RANGE OF DATES
        if (arrayOfKeys.includes("release_date_less_than") && arrayOfKeys.includes("release_date_more_than")){
            var value_less_than = getValueFromKey(filter,'release_date_less_than');
            var value_more_then = getValueFromKey(filter,'release_date_more_than');
            var res = await db.query(`SELECT * FROM albums WHERE release_date < $1 AND release_date > $2`,[value_less_than,value_more_then]);

        } else {
            return null;
        }
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
    if (data == null){
        res.sendStatus(400);
    }
    res.json(data);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
  
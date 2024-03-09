import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import generateToken from "./tools/token_gen.js";

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
    var value_less_than = null;
    var value_more_then = null;
    var res = null;
    // IF QUERY PARAMS ARE ONLY ONE 
    if (arrayOfKeys.length === 1) {
        var column = arrayOfKeys[0];
        var content = arrayOfvalues[0];
        // RATING LESS THAN OR MORE THAN 
        if (arrayOfKeys.includes('rating_less_than')) {
            res = await db.query("SELECT * FROM albums WHERE rating < $1",[content]);
            return res.rows;
        } else if (arrayOfKeys.includes('rating_more_than')) {
            res = await db.query("SELECT * FROM albums WHERE rating > $1",[content]);
            return res.rows;
        } else if (arrayOfKeys.includes('release_date_less_than')) {
            res = await db.query("SELECT * FROM albums WHERE release_date < $1",[content]);
            return res.rows;
        } else if (arrayOfKeys.includes('release_date_more_than')) {
            res = await db.query("SELECT * FROM albums WHERE release_date > $1",[content]);
            return res.rows;
        } else {
            var single_param_query = `SELECT * FROM albums WHERE ${column} = $1;`
            res = await db.query(single_param_query,[content]);
            return res.rows;
        }
        
    } else if (arrayOfKeys.length === 2) {
        // IF THE QUERY PARAMS ONLY INCLUDE A RANGE OF DATES
        if (arrayOfKeys.includes("release_date_less_than") && arrayOfKeys.includes("release_date_more_than")){
            value_less_than = getValueFromKey(filter,'release_date_less_than');
            value_more_then = getValueFromKey(filter,'release_date_more_than');
            res = await db.query(`SELECT * FROM albums WHERE release_date < $1 AND release_date > $2`,[value_less_than,value_more_then]);
            return res.rows;
        } else if (arrayOfKeys.includes('rating_less_than') && arrayOfKeys.includes('rating_more_than')) {
            // RANGE OF RATINGS 
            value_less_than = getValueFromKey(filter,'rating_less_than');
            value_more_then = getValueFromKey(filter,'rating_more_than');
            res = await db.query(`SELECT * FROM albums WHERE rating < $1 AND rating > $2`,[value_less_than,value_more_then]);
            return res.rows;
        }
        else {
            return null;
        }
    } else if (arrayOfKeys.length === 3) { // IF THERE IS 3 PARAMS
        var date_range_conditional = arrayOfKeys.includes('release_date_less_than') && arrayOfKeys.includes('release_date_more_than');
        var rating_range_conditional = arrayOfKeys.includes('rating_less_than') && arrayOfKeys.includes('rating_more_than')
        // SEARCH BAND OR GENRE WITH DATE RANGE
        if (date_range_conditional && rating_range_conditional === false) {
            var value_band = getValueFromKey(filter,'band');
            var value_genre = getValueFromKey(filter,'genre');
            value_less_than = getValueFromKey(filter,'release_date_less_than');
            value_more_then = getValueFromKey(filter,'release_date_more_than');
            if (arrayOfKeys.includes('band')){
                res = await db.query("SELECT * FROM albums WHERE band = $1 AND release_date < $2 AND release_date > $3",[value_band,value_less_than,value_more_then]);
                return res.rows;
            } else if (arrayOfKeys.includes('genre')){
                res = await db.query("SELECT * FROM albums WHERE genre = $1 AND release_date < $2 AND release_date > $3",[value_genre,value_less_than,value_more_then]);
                return res.rows;
            } else {
                return null;
            }
        } else if (date_range_conditional == false && rating_range_conditional) {
            var value_band = getValueFromKey(filter,'band');
            var value_genre = getValueFromKey(filter,'genre');
            value_less_than = getValueFromKey(filter,'rating_less_than');
            value_more_then = getValueFromKey(filter,'rating_more_than');
            if (arrayOfKeys.includes('band')){
                res = await db.query("SELECT * FROM albums WHERE band = $1 AND rating < $2 AND rating > $3",[value_band,value_less_than,value_more_then]);
                return res.rows;
            } else if (arrayOfKeys.includes('genre')){
                res = await db.query("SELECT * FROM albums WHERE genre = $1 AND rating < $2 AND rating > $3",[value_genre,value_less_than,value_more_then]);
                return res.rows;
            } else {
                return null;
            }
        } else {
            return null
        }      
    } 

    return null;
}

// AUTHENTICATE USER
"use-strinct";
var isAuthenticated = async (token) => {
    var user_row = await db.query("SELECT * FROM users WHERE authtoken = $1",[token])
    if (user_row.rowCount === 0) {
        return false;
    } else if (user_row.rowCount === 1) {
        return true;
    }
}

"use-strinct";
async function isUserTaken(mail) {
    var user_row = await db.query("SELECT * FROM users WHERE mail = $1",[mail]);
    if (user_row.rowCount === 0) {
        return false;
    } else {
        return true;
    }
}

"use-strinct";
async function registerUser(mail,password) {
    var user_token = generateToken();
    var insert_credentials = await db.query("INSERT INTO users (mail,password,authtoken) VALUES ($1,$2,$3)",[mail,password,user_token]).then(insert_credentials => {
        return true;
    }).catch(e => {
        console.log(e);
        return false;
    });
    return false;
}

async function loginUser(mail,password) {
    var gettoken = await db.query("SELECT authtoken FROM users WHERE mail = $1  AND password = $2;",[mail,password]);
    if (gettoken.rows[0]) {
        return gettoken.rows[0];
    }  else {
        return false;
    }
}


// Middleware
"use-strinct";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET ALL ALBUMS 
"use-strinct";
app.get("/user/albums/all", async (req, res) => {
    var data = null;
    // AUTH TOKEN
    var token = req.headers['auth-token']; // auth-token on heading for authentication
    var auth = await isAuthenticated(token);
    if (auth) {
        data = await getAllAlbums().then(data => {
            if (data != null) {
                res.json(data);
            } else {
                res.sendStatus(404); // IF THE RESULT IS NULL IT MEANS IT DOES NOT EXIST ON DATA BASE
            }   
        }).catch(e => {
            res.sendStatus(400);
            console.log(e);
        });
    } else {
        res.sendStatus(401); // NOT AUTHENTICATED
    }
  });


// GET ALBUMS BASED ON 1 FILTER (band,genre,release_date,rating)
// GET ALBUMS BETWEEN A RANGE (dates or rating)
// GET ALBUMS BASED ON 1 FILTER (band,genre) and a range (dates or rating)

"use-strinct";
app.get("/user/albums/filter", async (req,res) => {
    const filter = req.query;
    var data = null;
    // AUTH TOKEN
    var token = req.headers['auth-token']; // auth-token on heading for authentication
    var auth = await isAuthenticated(token);
    if (auth) {
        data = await getFilteredAlbums(filter).then(data => {
            if (data !== null) {
                res.json(data);
            } else {
                res.sendStatus(404); // IF THE RESULT IS NULL IT MEANS IT DOES NOT EXIST ON DATA BASE
            }   
        }).catch(e => {
            res.sendStatus(400); // IF WE CATCH AN ERROR IN THE REQUEST WE SEND ERROR CODE 400
            console.log(e);
        });
    } else {
        res.sendStatus(401);
    }
});

// MANAGE USER REGISTER AND LOGIN
app.post("/register", async (req,res) => {
    var username = req.query.username;
    var password = req.query.password;
    var user_exist = await isUserTaken(username);
    if (user_exist) {
        res.sendStatus(409);
    } else {
        var register_user = registerUser(username,password);
        if (register_user) {
            res.sendStatus(200);
        } else {
            res.sendStatus(409);
        }
    }
});

app.post("/login", async (req,res) => {
    var username = req.query.username;
    var password = req.query.password;
    var logged_in = await loginUser(username,password); 
    if (logged_in !== false) {
        res.json(logged_in);
    } else {
        res.sendStatus(401);
    }
    
})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
  
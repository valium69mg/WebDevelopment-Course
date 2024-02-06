
import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
//DATABASE
import db from "./database.js";
// HELPER FUNCTIONS 
import {emailExists,createUser,matchPassword} from "./helper.js";
// SESSIONS
import session, { Session } from "express-session";
import { v4 as uuidv4 } from 'uuid';
// PASSPORT 
import passport from "passport";
import passportConfig from "./passportConfig.js";
passportConfig(passport);

const app = express();
const port = 3000;
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// CONGIF EXPRESS SESSION
app.set('trust proxy', 1);

app.use(express.json());

app.use(session({
  genid: function(req) {
    return uuidv4();
  },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {secure: false},
  })
);

// PASSPORT CONFIG 

app.use(passport.initialize());
app.use(passport.session()); // CHECK ON THIS


// GET HOME
app.get("/", async (req,res) => { 
    res.render("home"); 
});

// GET LOGIN
app.get("/login", (req,res) => {
  res.render("login");
});

// GET REGISTER
app.get("/register", (req,res) => {
    res.render("register"); 
});


//GET SUBMIT
app.get("/submit", (req,res) => {
    if (req.session.authorized === true){
      res.render("submit");
    }
    else {
        res.sendStatus(404);
    }
});



// GET LOGOUT
app.get("/logout", (req,res) => {
    req.session.destroy();
    res.redirect("/");
});

// GET SECRETS (NEEDS API KEY AND USER ID)
app.get("/secrets", async (req,res) => {  
    const result = await db.query("SELECT secret FROM secrets ORDER BY RANDOM() LIMIT 1");
    const db_secret = result.rows[0].secret
    if (req.session.authorized === true){
        res.render("secrets",{secret: db_secret});
    } else {
        res.redirect("/"); 
    }
    
});

// PASSPORT ROUTES
app.post(
    "/register",
    passport.authenticate("local-signup", { session: false }),
    (req, res, next) => {
      res.json({
        user: req.user,
      });
    }
  );

app.post(
    "/login",
    passport.authenticate("local-login", { session: false }),
    (req, res, next) => {
        req.session.user_id = req.user.id;
        req.session.authorized = true;
        res.redirect("secrets");
    }
  );

// SUBMIT (NEEDS AN AUTHORIZED SESSION)
app.post("/submit", async (req,res) => {
    const secret = req.body.secret;
    if (req.session.authorized === true){
        try {
            const result = await db.query("INSERT INTO secrets (secret,user_id) VALUES ($1,$2)",[secret,req.session.user_id]);
            res.redirect("secrets");
          } catch (error) {
            console.error(error);
            res.redirect("/");
          }
    } else {
        res.sendStatus(404);
    }    
});


//LISTENING...
app.listen(port, (req,res) => {
    console.log(`Server started on port: ${port}`)
});


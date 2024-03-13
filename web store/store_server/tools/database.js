import pg from "pg";

"use-strinct";
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "burgers",
    password: "admin",
    port: 5432,
  });


// USERS
// CREATE USER IN DATABASE
// IF SUCCESFUL RETURNS ROWS IF NOT RETURNS FALSE
async function createUser(mail,password,direction)  {
    db.connect();
    try {
        const res = await db.query("INSERT INTO users (mail,password,direction) VALUES ($1,$2,$3)",[mail,password,direction]);
        db.end();
        return res.rows;
    } catch(err) {
        db.end();
        console.log(err);
        return false;
    }
};
   
    
// READ USER OR USERS IN DATABASE
// IF SUCCESFULL RETURNS AN OBJECT WITH THE ROWS IF NOT IT RETURNS FALSE
async function searchUser(id){
    db.connect();
    if (id === "all") {
        
        try {
            let res = await db.query("SELECT * FROM users"); 
            db.end();
            return res.rows;
        } catch(err){       
            db.end();
            console.log(err); 
            return false;
        } 
    } else {
        // SEARCH SPECIFIC USER BY ID
        try {
            let res = await db.query("SELECT * FROM users WHERE id = $1",[id]);     
            db.end(); 
            return res.rows;
        } catch(err){
            db.end();
            console.log(err);
            return false;
        }
    }
};

// UPDATE OPS
// MAIL, PASSWORD AND DIRECTION

async function updateUserMail(mail,id){
    db.connect();
    try {
        const res = await db.query(" UPDATE users SET mail = $1 WHERE id = $2",[mail,id]);
        db.end();
        return true;
    } catch(err) {  
        db.end();
        console.log(err);
        return false;
    }
};

async function updateUserPassword(password,id){
    db.connect();
    try {
        const res = await db.query(" UPDATE users SET password = $1 WHERE id = $2",[password,id]);
        db.end();
        return true;
    } catch(err) {   
        db.end();
        console.log(err);
        return false;
    }
};

async function updateUserDirection(direction,id){
    db.connect();
    try {
        const res = await db.query(" UPDATE users SET direction = $1 WHERE id = $2",[direction,id]);
        db.end();
        return true;
    } catch(err) {
        db.end();
        console.log(err);
        return false;
    }
};

// DELETE USERS

async function deleteUser(id) {
    db.connect();
    try {
        let res = await db.query("DELETE FROM users WHERE id = $1",[id]);
        db.end();
        return true;
    }catch(err) {
        db.end();
        console.log(err);
        return false;
    }
}

// ITEMS

// CREATE ITEMS
async function createItem(name,price,url) {
    db.connect();
    try {
        let res = await db.query("INSERT INTO items (name,price,url) VALUES ($1,$2,$3)",[name,price,url]);
        db.end();
        return true;
    } catch(err) {
        db.end();
        console.log(err);
        return false;
    } 

}

export {searchUser};
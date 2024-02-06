import db from "./database.js";
import bcrypt from "bcrypt"; // HASHING WITH SALT
const saltRounds = process.env.SALTROUNDS;
// FUNCTIONS 
const emailExists = async (mail) => {
    const data = await db.query("SELECT * FROM users WHERE mail=$1", [
      mail,
    ]);
   
    if (data.rowCount == 0) return false; 
    return data.rows[0];
};

const createUser = async (mail, password) => {
    
    const salt = await bcrypt.genSalt(parseInt(saltRounds));
    const hash = await bcrypt.hash(password, salt);
   
    const data = await db.query(
      "INSERT INTO users (mail, saltpass) VALUES ($1, $2) RETURNING id,mail,saltpass",
      [mail, hash]
    );
   
    if (data.rowCount == 0) return false;
    return data.rows[0];
};

const matchPassword = async (password, hashPassword) => {
    const match = await bcrypt.compare(password, hashPassword);
    return match;
  };


export {emailExists};
export {createUser};
export {matchPassword};
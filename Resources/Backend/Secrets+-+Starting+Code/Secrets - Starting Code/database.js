import pg from "pg";

// DATABASE 
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "admin",
    port: 5432,
});

db.connect();

export default db;
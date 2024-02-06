import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// APP WITH EXPRESS
const app = express();
const port = 3000;

//CONNECT DATABASE WITH BACKEND
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "todolist",
    password: "admin",
    port: 5432,
  });
  
db.connect();

// SELECT POSTS TABLE 
async function getPosts(){
    const result = await db.query("SELECT * FROM posts");
    const posts = result.rows;
    return posts;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// GET PAGE AND ALL POSTS 
app.get("/", async (req, res) => {
    const posts = await getPosts(); // FORMAT: {id: <int>, post: <text>, ts: <timestamp>}
    res.render("index.ejs", 
    {
      list: posts,
      list_length: posts.length
    });
    
    
});

// USING SOMETHING LEARNED IN APIS
app.get("/edit", async (req,res) => {
  if (req.query.id) {
    res.render("edit.ejs", 
    {
      edit_id: req.query.id,
    });
  } else {
    res.sendStatus(404);
  }
  
})

// SUBMIT POST 
app.post("/submit", async (req,res) => {
    const taskText = req.body["task"];
    await db.query("INSERT INTO posts (post) VALUES ($1)", [
        taskText
    ]); 
    res.redirect("/");
})

// DELETE POSTS
app.post("/delete", async (req,res) => {
  if (req.query.post){
    await db.query("DELETE FROM posts WHERE post LIKE '%' || $1 || '%';", [
      req.query.post
    ]); 
    res.redirect("/");
  } else {
    res.sendStatus(404);
  }
  
});



// EDIT POSTS
app.post("/edit", async (req,res) => {
  const id = req.query.id;
  const editedText = req.body.taskEdited;
  await db.query("UPDATE posts SET post = $1 WHERE id = $2;",[editedText,id]);
  res.redirect("/");
})
  
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
  
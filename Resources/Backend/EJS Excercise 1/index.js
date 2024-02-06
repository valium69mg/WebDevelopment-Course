import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res) => {
    const today = new Date();
    const day = today.getDate();
    
    res.render("index.ejs",{
        dayType: day,
        advice: "it's time to work hard"
    })
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});
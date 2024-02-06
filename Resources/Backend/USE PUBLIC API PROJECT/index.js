import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index.ejs");
})

app.post("/submit", async (req,res) => {
    try {
        const results = await axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart");
        res.render("index.ejs",{
            part1: results.data.setup,
            part2: results.data.delivery
        });
    } catch (error){
        res.status(500);
        console.log(error.response.data);
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

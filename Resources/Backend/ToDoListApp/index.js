import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
let todayList = [];
let workList = [];
const work = "Work";
const today = "Today";




app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/",(req,res) => {
    res.redirect('/Today');
})

app.get("/Work",(req,res) => {
    let listOfWork_length = workList.length;
    res.render("work.ejs",{
        tasks: workList,
        list_length: listOfWork_length,
    });
})

app.get("/Today",(req,res) => {
    let listOfToday_length = todayList.length;
    res.render("index.ejs",{
        tasks: todayList,
        list_length: listOfToday_length,
    });
})


app.post("/submit", (req,res) => {
    const nextTask = req.body["task"];
    todayList.push(nextTask);
    let listOfToday_length = todayList.length;
    res.render("index.ejs",{
        tasks: todayList,
        list_length: listOfToday_length,
    });
});

app.post("/submitWork", (req,res) => {
    const nextTask = req.body["task"];
    workList.push(nextTask);
    let listOfWork_length = workList.length;
    res.render("work.ejs",{
        tasks: workList,
        list_length: listOfWork_length,
    });
});


app.listen(port, () => {
    console.log(`Listening on port: ${port}...`);
});
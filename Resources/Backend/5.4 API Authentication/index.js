import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "carlosroman";
const yourPassword = "ILOVEWEBDEV123";
const yourAPIKey = "d7adc0e8-0d92-4ea6-88df-8fb79d9c4b33";
const yourBearerToken = "884fee0d-5dd0-46bc-b280-d920739f414e";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", { content: JSON.stringify(result.data)});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }

});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/all?page=1", {
        auth: {
          username: yourUsername,
          password: yourPassword // NO COMAS IN HERE
        },
      }
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});


app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/filter?score=5&apiKey=d7adc0e8-0d92-4ea6-88df-8fb79d9c4b33");
    res.render("index.ejs", {content: JSON.stringify(result.data)})
  } catch (error){
    res.status(404).send(error.message);
  }

});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/secrets/1", {
        headers: {
          Authorization : `Bearer ${yourBearerToken}`
        },
      }
    
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

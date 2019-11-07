const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//const url = "http://numbersapi.com/random/year?json"
const url = "http://numbersapi.com/"


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'))

const axios = require('axios');

app.get('/api', async (req, res) => {
  try {
    console.log("get called with arguments: " + req.query.args);
    let args = req.query.args;
  
    const json = await axios.get(url + args + "?json");
    console.log(json.data);
    res.send(json.data);
  } catch(error) {
    console.log("no response from api...\n" + error);
    res.status(404)
      .send("Sorry, that doesn't exist");
    return;
  }  
});


app.listen(4200, () => console.log('Server listening on port 4200!'));
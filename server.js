const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

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

app.get('/api', (req, res) => {
  console.log("get called with arguments: " + req.query.args);
  let args = req.query.args;

  //ERROR WITH AXIOS...not sure what the problem is
  //const json = await axios.get(url + args + "?json");
  //res.send(json);
});


app.listen(4200, () => console.log('Server listening on port 4200!'));
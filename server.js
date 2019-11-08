const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'))

app.get('/api', async (req, res) => {
    try {
        var args = req.query.args;
        var response = await axios('http://numbersapi.com/' + args + '?json');
        console.log(response.data);
        res.send(response.data);
    } catch(error) {
        console.log(error);
    }
});

app.listen(4200, () => console.log('Server listening on port 4200!'));

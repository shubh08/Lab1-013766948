

//import the require dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
app.set('view engine', 'ejs');

//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//use express session to maintain session data
app.use(session({
    secret: 'cmpe273_kafka_passport_mongo',
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
}));


app.use(bodyParser.json());




app.post('/calculate', function (req, res) {
    let response;
    let responseObj = {};
    console.log('\n Inside calculate Post method');
    let result = eval(req.body.expression);
    console.log(result+typeof result);
    if(result===Infinity) responseObj.result = 'Infinity';
   responseObj.result = result;

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    console.log("Calculation Result : ", responseObj);
    res.end(JSON.stringify(responseObj));
});

app.listen(3001);
console.log("Server Listening on port 3001");

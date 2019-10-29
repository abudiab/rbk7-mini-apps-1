var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.use(express.static('client'));

// app.get('/', function (req, res) {
//     res.sendfile('index.html');
// });

// var received = 'gotcha json'
var converted = 'herya csv'; //change this

app.get('/upload_json', function (req, res) {
    console.log(converted);
    // res.send(converted);
});

app.post('/upload_json', function (req, res) {
    console.log(req.body);
//    res.send(received);
});

app.listen(3000, function(){
    console.log("Listening on port 3000!");
});


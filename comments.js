// Create web server
// npm install express
// npm install body-parser
// npm install nodemon
// nodemon comments.js
// http://localhost:3000/comments
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var comments = [];
var id = 1;

app.get('/comments', function(req, res) {
    res.json(comments);
});

app.post('/comments', function(req, res) {
    var comment = req.body;
    comment.id = id++;
    comments.push(comment);
    res.json(comment);
});

app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});
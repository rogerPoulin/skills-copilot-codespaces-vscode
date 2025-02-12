// Create web server for comments
// Load all the modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var comments = require('./comments.json');
// Use body parser module to parse the incoming data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create a get method to get all the comments
app.get('/comments', function(req, res) {
    res.json(comments);
});
// Create a post method to add the comments
app.post('/comments', function(req, res) {
    comments.push(req.body);
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
        console.log('Data saved successfully');
    });
    res.json(comments);
});
// Create a delete method to delete the comments
app.delete('/comments/:id', function(req, res) {
    comments.splice(req.params.id, 1);
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
        console.log('Data deleted successfully');
    });
    res.json(comments);
});
// Create a put method to update the comments
app.put('/comments/:id', function(req, res) {
    comments[req.params.id] = req.body;
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
        console.log('Data updated successfully');
    });
    res.json(comments);
});
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
// Export the module
module.exports = app;
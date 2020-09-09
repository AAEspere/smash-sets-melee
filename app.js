const express = require('express');
const app = express();
const port = 3000;

var searchYoutube = require('./scripts/searchYoutube');

app.set('view engine', 'ejs');
//app.use('/bootstrap-4.3.1-dist', express.static('boostrap-4.3.1-dist'));
app.use('/public',express.static('public')); 

app.listen(port, () => {
    console.log('Smash app listening at http://localhost:' + port);
})

//home page
app.get('/', function (req, res) {
    res.render('index');
})

/**
 * For querying youtube once a character is selected on index
 */
app.get('/characterSearch', function (req, res) {
    
    searchYoutube.searchYoutube('fox', function(collection) {
        console.log(collection.snippet.title);
        console.log(collection.snippet.description);
    })
})

//testing that callback was successful
searchYoutube.searchYoutube('fox', function(collection) {
    console.log(collection[0].snippet.title);
    console.log(collection[0].snippet.description);
})
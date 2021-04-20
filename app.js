const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});
const port = 3000;
//MongoDB integration
const {MongoClient} = require("mongodb");
const uri = "mongodb+srv://Aaron:Superiormelee98@smashsetsmelee.qwzxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var searchYoutube = require('./scripts/searchYoutube');

app.set('view engine', 'ejs');
//app.use('/bootstrap-4.3.1-dist', express.static('boostrap-4.3.1-dist'));
app.use('/public',express.static('public')); 

app.listen(port, () => {
    console.log('Smash app listening at http://localhost:' + port);
})

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//home page
app.get('/', function (req, res) {
    res.render('index', {searchQuery: null});
})

/**
 * For querying youtube once a character is selected on index
 */
app.post('/characterSearch', urlencodedParser, function (req, res) {
    var character = req.body.character;
    searchYoutube.searchYoutube(character, function(collection) {
        console.log(collection);
        res.render('index', {searchQuery: collection});
    })
})
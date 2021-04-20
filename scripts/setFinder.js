var setup = require('./youtubeSetup')
var sets = require('../class/set');
var mongodb = require('./mongodb');
const { client } = require('./mongodb');

/**
 * 
 * This file is for appending sets onto the MongoDB Database
 * The easiest way to do this is to go through every channel that I 
 * know does Melee tournaments, and then append every set onto the database
 */

/**
 * 
 * Getting the Melee results by channel name
 * 1. Get the results from the YouTube API
 * 2. Get the parameters from the string (playerNames, characterNames, tournament, year)
 * 3. Make all of that into an object in the set class, and then push that to the database
 * 4. Get the link to the set 
 * 5. Make sure there are no duplicates every time this function is run
 */

function searchByChannel(channelName) {
    var queryResults = [];

    var queryString = "melee vs";

    setup.youtube.search.list({
        part: 'snippet',
        q: queryString,
        order: 'relevance',
        channelId: channelName,
        maxResults: 1
    }).then((response) => {
        const {data} = response;
        data.items.forEach(function(item) {
            console.log(item);
            queryResults.push(item);
        });
    }).then(()=> {
    })
}

function searchByChannelAndTournament(channelName, tournament) {
    var queryResults = [];

    var queryString = tournament;

    setup.youtube.search.list({
        part: 'snippet',
        q: queryString + "vs",
        order: 'relevance',
        channelID: channelName,
        maxResults: 1
    }).then((response) => {
        const {data} = response;
        data.items.forEach(function(item) {
            console.log(item);
            queryResults.push(item);
        });
    }).then(()=> {

    })
}

//appending the set to the Database
function appendSet() {

    client.connect(uri, function(err, db) {
        if(err) throw err;
        console.log("Database created!");
        db.close();
    })

}

/* Popular Smash Tournament Channels
Beyond the Summit - UCKJi-4lbB3EwpLpC82OWFjA
VGBootCamp - UCj1J3QuIftjOq9iv_rr7Egw
*/

//searchByChannel('UCKJi-4lbB3EwpLpC82OWFjA');
searchByChannelAndTournament('UCKJi-4lbB3EwpLpC82OWFjA','SCL');

module.exports = {

}
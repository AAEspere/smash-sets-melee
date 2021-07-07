/**
 * For uploading the sets onto a json file.
 * This might just make it easier for me to mass upload
 * as many sets into the database.
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var setup = require('./youtubeSetup');
const fs = require('fs');
var players = require('./players.json');
//var sets = require('sets.json');

var setData = {};
setData.table = [];

//name of characters and any nicknames
var characters = ['Dr. Mario','Mario','Luigi','Peach','Yoshi','Donkey Kong','Captain Falcon','Falcon','Ganondorf','Ganon'
,'Falco','Fox','Ness','Ice Climbers','Samus','Zelda','Shiek','Link','Young Link','Pichu','Pikachu',
'Jigglypuff','Puff','Mewtwo','Mr.Game & Watch','Game & Watch','Marth','Roy'];

//function to test if the names are getting read from the JSON correctly
/*
function testJSON() {
    for(var i = 0; i < players["names"].length; i++) {
        console.log(players["names"][i]["player"]);
    }
}
testJSON();
*/

/**
 * 
 * Searches Youtube for sets to put into a JSON file, which will be uploaded to the MongoDB database.
 * The parameters just have to be changed in order to get different sets. 
 * Then I'll just manually go over the 
 * 
 */
function searchYoutube(callback) {

    var queryString = "tournament melee vs -ultimate";

    setup.youtube.search.list({
        part: 'snippet',
        q: queryString,
        order: 'relevance',
        type: 'video',
        publishedAfter: '2016-01-01T00:00:00Z',
        order: 'date',
        maxResults: 1
    }).then((response) => {
        const {data} = response;
        data.items.forEach(function(item) {
            var players = [];
            var chars = [];

            var setTitle = item.snippet.title;
            setTitle.replace(/[{()}]/g, '');
            var stringArray = setTitle.split(' ');

            //This solution is slow af (O(n^2) but I cannot think of a different solution for now
            //and this method only works if there is only one character used in the set
            for(var i = 0; i < stringArray.length; i++) {
                for(var j = 0; j < characters.length; j++) {
                    if(stringArray[i] == characters[j]) {
                        chars.push(characters[j]);
                        //then remove the string from the string array (this will make it so you just have to look for vs in the next for loop)
                        stringArray.splice(0,j);
                        j--;
                    }
                }
            }
            /*After looking at trends in tournament set names, look for the first vs in the title and get the word before it and the word after it.
            This works because Beyond the Summit has vs twice but the player names are first, and any other channel just uses player vs player. */
            for(var i = 0; i < stringArray.length; i++) {
                if(stringArray[i] == "Vs." || stringArray[i] == "vs." || stringArray[i] == "Vs" || stringArray[i] == "vs") {
                    players.push(stringArray[i-1]);
                    players.push(stringArray[i+1]);
                    break;
                }
            }
            /*Variables which will be in the database*/
            var set = {
                title: item.title,
                players: players,
                charsPlayed: chars,
                year: item.publishTime
            }
            setData.table.push(set);
        })
    })
}

searchYoutube();
console.log(setData);
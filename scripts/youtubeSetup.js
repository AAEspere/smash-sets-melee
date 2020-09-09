const youtube_key = "AIzaSyCLAAXj6nI_9HIut0K6EZ3IDJYiX1egtRw";
var {google} = require('googleapis');
var youtube = google.youtube({
    version: 'v3',
    auth: youtube_key
})

module.exports = {
    google:google,
    youtube:youtube
}
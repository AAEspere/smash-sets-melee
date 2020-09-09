var youtube_key = "AIzaSyCLAAXj6nI_9HIut0K6EZ3IDJYiX1egtRw";
//Youtube API
var {google} = require('googleapis');
const { format } = require('mysql');
var youtube = google.youtube({
    version: 'v3',
    auth: 'AIzaSyCLAAXj6nI_9HIut0K6EZ3IDJYiX1egtRw'
})

//additional query needs
function characterSearch() {
    let additionalQuery = " melee tournament";
    var searchRequest = youtube.search.list({
        part: 'snippet',
        type: 'video',
        q: 'fox melee tournament',
        maxResults: 1,
        order: 'date',
        safeSearch: 'moderate',
        videoEmbeddable: true
    }, (err, response) => {
        console.log(searchRequest);
    });
    /*
    for(var i in searchRequest.items) {
        var item = searchRequest.items[i];
        console.log('Title:', item.id.videoId, item.snippet.title);
    }
    */
}

characterSearch();
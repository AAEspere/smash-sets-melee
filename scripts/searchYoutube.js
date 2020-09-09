var setup = require('./youtubeSetup');
var search = setup.youtube.search.list({
    part: 'snippet',
    q: 'joji',
    maxResults: 1
});

for(var i in search.items) {
    var item = search.items[i];
    console.log(item);
}

function searchYoutube(character, callback) {
    var queryResults = [];

    setup.youtube.search.list({
        part: 'snippet',
        q: 'joji',
        order: 'date',
        maxResults: 1,

    }).then((response) => {
        const {data} = response;
        data.items.forEach(function(item) {
            queryResults.push(item);
        });
    }).then(() => {
        callback(queryResults);
    })
}

module.exports = {
    searchYoutube: searchYoutube
}

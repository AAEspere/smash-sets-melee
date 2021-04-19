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

    //need to experiment with the search queries to get ONLY tournament sets
    var queryOmit = " -ultimate -ssb4 -64 -pm";
    var VGBootCamp = character + " melee vs. VGBootCamp";
    var BeyondtheSummit = character + " melee vs. Beyond the Summit"
    var queryString = VGBootCamp + "|" + BeyondtheSummit + queryOmit;

    var queryString2 = character + ' melee tournament vs. -ultimate -ssb4 -64 -TAS -pm';

    //need different query for lower tier characters

    setup.youtube.search.list({
        part: 'snippet',
        q: queryString2,
        order: 'relevance',
        type: 'video',
        publishedAfter: '2016-01-01T00:00:00Z',
        maxResults: 10,

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

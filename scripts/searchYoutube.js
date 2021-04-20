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
    var queryString = character + ' melee VGBootCamp|' + character + ' melee Beyond the Summit -ultimate -ssbu -ssbb -brawl -smash4';
    var queryString2 = character + ' melee tournament -ultimate -ssbu -ssbb -brawl -smash4';

    setup.youtube.search.list({
        part: 'snippet',
        q: queryString2,
        order: 'date',
        maxResults: 3,
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

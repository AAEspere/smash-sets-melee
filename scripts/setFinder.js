var setup = require('./youtubeSetup')

//search results

function searchByTournament(tournament) {
    var queryResults = [];

    var queryString = "melee " + tournament;

    setup.youtube.search.list({
        part: 'snippet',
        q: queryString,
        order: 'relevance',
    })
}

module.exports = {

}
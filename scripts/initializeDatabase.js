var mongodb = require('./mongodb');

async function createSetsCollection() {
        await mongodb.client.connect();
        const database = mongodb.client.db("smashSetsMelee");
        database.createCollection("sets");
}

async function createPlayersCollection() {
        await mongodb.client.connect();
        const database = mongodb.client.db("smashSetsMelee");
        database.createCollection("players");
}

/* Set collection documents fields
Players - [string list]
Characters - [string list]
Tournament - String
Date - String (or if only year then int)
Link - String
*/

/* Players collection document fields
Player - String
Main - [string list]
*/

function disconnect() {
    mongodb.client.close();
}
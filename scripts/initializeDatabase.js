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

function disconnect() {
    mongodb.client.close();
}
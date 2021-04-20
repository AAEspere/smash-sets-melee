//for setting up mongoDB;
const {MongoClient, Db} = require("mongodb");
const uri = "mongodb+srv://Aaron:smashSetsMelee2001@smashsetsmelee.qwzxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//to connect to the database
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = {
    client: client,
    uri: uri
}


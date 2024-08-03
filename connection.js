// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const DataBase = 'vikassingh';

// const fethchfun = async () => {
//     const result = await client.connect();
//     const db = result.db(DataBase);
//     return db.collection('vikasdata');
//     // const respond = await collection.find({}).toArray();
//     // console.log(respond);

// }


// module.exports = fethchfun;


const {mongoClient} = requier('mongodb');
const url = "mongodb://localhost:27017";
const client = new mongoClient(url);
const DataBase = "vikassingh";

const fethchfun = async() =>{
    const result = await client.connect();
    const  db = result.db(DataBase)
    return  db.collection('vikasdata');
}


module.exports = fethchfun;
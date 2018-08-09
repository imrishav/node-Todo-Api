// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true},(err, client)=>{
    if(err){
        return console.log("Unable to connect")
    }

    const database = client.db('TodoApp')
    console.log("Conencted to mongodb")

    
   database.collection('Users').find().toArray().then((count)=>{
        // console.log(`Todos Count : ${count}`)
        console.log(JSON.stringify(count,undefined,2))
   },(err) => {
       console.log("Unable to Fetch",err)
   })

    // db.close();
});
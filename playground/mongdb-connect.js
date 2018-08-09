// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true},(err, client)=>{
    if(err){
        return console.log("Unable to connect")
    }

    const database = client.db('TodoApp')
    console.log("Conencted to mongodb")

    // database.collection('Todos').insertOne({
    //     text: 'Do something',
    //     completed: false
    // }, (err, result)=>{  
    //     if(err){
    //         return console.log("unable to Insert", err)
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2))

    // });

    database.collection('Users').insertOne({
        
        name: "Rishav",
        age: 20,
        location: "Noida"

    }, (err, result)=>{
        if(err){
            return console.log("Unable to insert", err)
        }

        console.log(JSON.stringify(result.ops,undefined,2))
        // console.log(result.ops[0]._id.getTimestamp())

    })

    client.close();
});
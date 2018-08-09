// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true},(err, client)=>{
    if(err){
        return console.log("Unable to connect")
    }

    const database = client.db('TodoApp')
    console.log("Conencted to mongodb")

//     

 
    database.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b6c6ba99c412e25f4687a05')
    },{
        $set: {
            name: "RISHAV SINHA"
        },
        $inc:{
            age : 2
        }
    },{
        returnOriginal : false
    }).then((result)=>{
        console.log(result)
    })

    // db.close();
});
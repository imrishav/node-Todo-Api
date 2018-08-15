const {ObjectID} = require('mongodb')
const {mongoose}   = require("./../server/db/mongoose")
const {Todo}       = require("./../server/models/todos")
const {User}       = require("./../server/models/user")

var id = "5b6d386bc0bf6223d8560427"

// if(!ObjectID.isValid(id)){
//     console.log("Id Not Valid")
// }

// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log("Todos", todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log("Todos", todo)
// })

User.findById(id).then((user) =>{
    if(!user){
        return console.log("User Not Found")
    }
    console.log(JSON.stringify(user, undefined, 10))
}).catch((e)=>console.log(e));



var express = require('express')
var bodyParser = require('body-parser')



var {mongoose} = require('./db/mongoose')
var {Todo}     = require('./models/todos')
var {User}     = require('./models/user')


var app = express();
app.use(bodyParser.json())

app.post('/todos', (req, res) =>{
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((docs)=>{
        res.send(docs)
    }, (error)=>{
        res.status(400).send(error)
    })
})

app.listen(3000, ()=>{
    console.log("started server")
})


module.exports = {app}














const expect = require('expect')
const request = require('supertest')

const {app} = require('./../server')
const {Todo} =require('./../models/todos')


const todos = [{
    text: "First Test Todo"
},{
    text: "First Test Todo"
}]

beforeEach((done) =>{
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos)
    }).then(()=>done())
})

describe('POST /todos',()=>{
    it('should create a new todo', (done)=>{
        var text = "Test Here"

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(text)
            })
            .end((err, res)=>{
                if(err){
                    return done(err)
                }

                Todo.find({text}).then((todos)=>{
                    expect(todos.length).toBe(1)
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((err)=> done(err))
            })

    })

    it('should not create todo with invalid data', (done) =>{
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err,res) => {
                if(err){
                    return done(err)
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2)
                    done();
                }).catch((e) => done(e))
            })
    })
})


describe('GET /todos', ()=> {
    it("should get all todos", (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res)=>{
                expect(res.body.todos.length).toBe(2)
            })
            .end(done)
    })
})
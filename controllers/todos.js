// We have the `s` here because there will be many actions

// require in my Todo
// Because this is a model best practice is to name it uppercase
// We don't need the `.js` here because we are running this in a Node env. Node will assume that all files it is being given are `.js` files
const Todo = require('../models/todo')

function index(req, res) {
    res.render('todos/index', {
        todos: Todo.getAll(),
        title: 'All To-Dos'
    })
    // {
    //     todos: [...todos]
    // }
}

function show(req, res) {
    // console.log(req.params)
    res.render('todos/show', {
        todo: Todo.getOne(req.params.id),
        title: 'To-Do Details'
    })
}

module.exports = {
    index,
    show
}
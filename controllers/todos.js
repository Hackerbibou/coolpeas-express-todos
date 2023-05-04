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
}

function show(req, res) {
    // console.log(req.params)
    res.render('todos/show', {
        todo: Todo.getOne(req.params.id),
        title: 'To-Do Details'
    })
}

function newToDo(req, res) {
    res.render('todos/new', { title: 'New Todo' })
}

function create(req, res) {
    console.log(req.body)
    Todo.create(req.body)
    res.redirect('/todos')
}

function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id)
    res.redirect('/todos')
}
function update(req,res) {
    Todo.update(req.params.id, req.body)
    res.redirect(`/todos/${req.params.id}`)
  }
  function edit(req,res) {
    const todo = Todo.getOne(req.params.id)
    res.render('todos/edit', {
      title: 'Edit To Do',
      todo
    })
  }

module.exports = {
	index,
	show,
	newToDo,
	create,
	deleteTodo,
    edit,
    update
}
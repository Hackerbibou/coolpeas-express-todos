// Best practice we name our Models without an s because we are representing a single thing/data item
// Model what a single ToDo should look like

const todos = [
	{ id: 125223, todo: 'Feed Dogs', done: true },
	{ id: 127904, todo: 'Learn Express', done: false },
	{ id: 139608, todo: 'Buy Milk', done: false },
]


// READ - Index get all of a data (todos)
function getAll()  {
    return todos
}

// READ - Show get 1 object based on the `id`
function getOne(id) {

	// req.params come in as strings always. If we need another data type we need to change that string to the type we need
	// I want to find the first element/item that matches my check
	// If nothing is found matching that check I want to return -1
	return todos.find(todo => todo.id === parseInt(id))
}


function create(todo) {
	todo.id = Date.now() % 1000000
	todo.done = false
	todos.push(todo)
}

function deleteOne(id) {
	id = parseInt(id)

	const idx = todos.findIndex(todo => todo.id === id)
	todos.splice(idx, 1)
}

function update(id, name){
	id = parseInt(id)
  const todo = todos.find(todo => todo.id === id)
  todo.todo = updateToDo.todo	

}
// exporting to use elsewhere in my app
module.exports = {
	getAll,
	getOne,
	create,
	deleteOne,
	update
}
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

// exporting to use elsewhere in my app
module.exports = {
    getAll
}
var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');
// All actual paths start with "/todos"
// GET /todos
router.get('/', todosCtrl.index);
router.get('/new', todosCtrl.newToDo)
// GET /todos/:id
router.get('/:id', todosCtrl.show);
router.get('/:id/edit', todosCtrl.edit)
router.post('/', todosCtrl.create)
router.delete('/:id', todosCtrl.deleteTodo)
router.put('/:id', todosCtrl.update)
module.exports = router;


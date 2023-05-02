const express = require('express')
const router = express.Router()

const todoController = require('../controllers/todos')

// URL in the browser to localhost:3000/todos/kaleSoup
// GET request localhost:3000/todo
router.get('/', todoController.index)

// If there is only 1 export you don't need the object
module.exports = router
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../models/todo-model');


//GET route => to get all todos
router.get('/todos', (req, res) => {
  // Gets data from mongoDB
  Todo.find()
    .then(allTodos => {
      // will do something with the result
      res.json(allTodos);
    })
    .catch(err => {
      // will do something else
      res.json(err);
    })
});


//POST route => to create a new todo
router.post('/todos', (req, res) => {
  const { name, completed } = req.body;
  Todo.create({
    name,
    completed
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});

// PUT route => to update a specific todo
router.put('/todo/:id', (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
      .then((response) => {
        res.json({ message: `Todo ${response} was updated succesfully`});
      })
      .catch(error => {
        res.json(error);
      }) 
});


// DELETE route => to delete a specific todo
router.delete('/todo/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid'});
  }

  Todo.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.json({ message: response})
    })
    .catch(error => {
      res.status(500).json({ message: `Error occurred: ${error}`});
    });
});

module.exports = router;
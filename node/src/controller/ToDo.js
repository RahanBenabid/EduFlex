const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Update a todo's status
router.put('/change/:todoId', async (req, res) => {
  const { userId } = req.body;
  const { todoId } = req.params;
  const newStatus = req.body.status;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const todo = user.todos.id(todoId);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    todo.status = newStatus;
    const updatedUser = await user.save();
    
    res.status(200).json(updatedUser.todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Delete all todos
router.delete('/delete', async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    user.todos = []; // Clear the todos array
    const updatedUser = await user.save();
    
    res.status(200).json(updatedUser.todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Add a new todo
router.post('/add', async (req, res) => {
  console.log("hola")
  const { userId, todo } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.todos.push(todo);
    const updatedUser = await user.save();

    res.status(200).json(updatedUser.todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/get', async (req, res) => {
  const userId = req.query.userId;  // Assuming you are passing userId as a query parameter
  
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user.todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
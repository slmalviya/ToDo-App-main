const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/newToDoApp', { useNewUrlParser: true, useUnifiedTopology: true });

const todoSchema = new mongoose.Schema({
    title: String,
    startDate: Date,
    endDate: Date
});

const Todo = mongoose.model('Todo', todoSchema);

// Create a new to-do item
app.post('/api/todos', async (req, res) => {
    const { title, startDate, endDate } = req.body;
    const newTodo = new Todo({
        title,
        startDate,
        endDate
    });
    await newTodo.save();
    res.status(201).send(newTodo);
});

// Get all to-do items
app.get('/api/todos', async (req, res) => {
    const todos = await Todo.find();
    res.status(200).send(todos);
});

// Edit a to-do item
app.put('/api/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { title, startDate, endDate } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, { title, startDate, endDate }, { new: true });
    res.status(200).send(updatedTodo);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

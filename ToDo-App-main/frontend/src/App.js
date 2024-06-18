import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:5000/api/todos');
    setTodos(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:5000/api/todos/${editId}`, { title, startDate, endDate });
      setEditId(null);
    } else {
      await axios.post('http://localhost:5000/api/todos', { title, startDate, endDate });
    }
    setTitle('');
    setStartDate('');
    setEndDate('');
    fetchTodos();
  };

  const handleEdit = (todo) => {
    setTitle(todo.title);
    setStartDate(todo.startDate.split('T')[0]);
    setEndDate(todo.endDate.split('T')[0]);
    setEditId(todo._id);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>To-Do List</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              {editId ? 'Update' : 'Add'} To-Do
            </Button>
          </Form>
          <ListGroup className="mt-5">
            {todos.map((todo) => (
              <ListGroup.Item key={todo._id}>
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>{todo.title}</strong><br />
                    {new Date(todo.startDate).toLocaleDateString()} - {new Date(todo.endDate).toLocaleDateString()}
                  </div>
                  <Button variant="outline-secondary" onClick={() => handleEdit(todo)}>Edit</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const port = 4000;
const app = express();
app.use(express.json());

let todos = [];
let laborHistory = [];
let materialHistory = [];

app.get('/todos', (_, res) => {
  res.json(todos);
});

app.get('/laborHistory', (_, res) => {
  res.json(laborHistory);
});

app.get('/materialHistory', (_, res) => {
  res.json(materialHistory);
});

app.post('/todo', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).end;
  }

  const todo = { name, id: uuidv4() };
  todos.push(todo);

  res.json(todo);
});

app.delete('/todo', (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).end();
  }

  todos = todos.filter(todo => todo.id !== id);

  res.status(204).end();
});

app.listen(port, () => console.log(`Server listening at port ${port}`));

import express from 'express';
import createCourse from './routes';

const app = express();

app.use(express.json())

app.get('/', createCourse);

app.post('/courses', (req, res) => {
  const { name } = req.body;

  return res.json({ name });
});

app.listen(3333, () => console.log("server is running"));

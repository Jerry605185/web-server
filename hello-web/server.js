import express from 'express';

const app = express();
const PORT = 3000;
const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];
app.get('/', (req, res) => {
  res.send('Hello, web!');
});
app.get('/projects', (req, res) => {
  const tag = req.query.tag;
   if (tag) {
    const filtered = projects.filter((p) => p.tag === tag);
    return res.json(filtered);
  }

  res.json(projects);
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
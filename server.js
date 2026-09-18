import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;
const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];
const events = [
  { title: 'Career fair' },
  { title: 'Hackathon kickoff' },
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/events', (req, res) => {
  res.render('entries', { events });
});
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
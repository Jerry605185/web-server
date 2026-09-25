import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());

const wishlist = [];

app.post('/wishlist', (req, res) => {
  const { item, note } = req.body;
  // your decision goes here
  if (!item) {
    return res.status(400).json({ error: 'Item is required' });
  }
  const newItem = { item, note };
  wishlist.push(newItem);
  res.status(201).json(newItem);
});
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
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
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
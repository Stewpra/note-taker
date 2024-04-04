const express = require('express');
const app = express();
const router = express.Router();
const api = require('./routes/index.js');
const PORT = process.env.PORT || 3001;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.use('/', router);
app.use('/api', api);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to serve the landing page
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route to serve the notes page
router.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

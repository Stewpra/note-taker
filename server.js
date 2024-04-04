const express = require('express');
const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3001;
app.use('/', router);

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

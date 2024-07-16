const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();

// Enable CORS
app.use(cors({ optionsSuccessStatus: 200 }));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Multer setup for file upload
const upload = multer({ dest: 'uploads/' });

// Index route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// File analyse API endpoint
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const { originalname, mimetype, size } = req.file;
  res.json({ name: originalname, type: mimetype, size });
});

// Listen for requests
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

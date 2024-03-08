const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
    // Access the uploaded image using req.file.buffer
    // Add your logic for processing or storing the image here

    res.send('Image uploaded successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

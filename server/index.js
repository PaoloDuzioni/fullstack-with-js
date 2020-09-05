const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Create server app
const app = express();

// Allow CORS
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});

app.get('/users', (req, res) => {
    axios.get('https://randomuser.me/api/?page=1&results=10').then(response => {
        res.send(response.data);
    });
});

// Serve
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

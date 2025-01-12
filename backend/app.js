const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const routes = require('./routes');
app.use('/api', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
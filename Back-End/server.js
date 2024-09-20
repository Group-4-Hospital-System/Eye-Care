const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const pool = require('./config/db'); // Import the database pool
const authRoutes = require('./routes/authRoutes'); // Import your auth routes
const userRoutes = require('./routes/appointmentRoutes');
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Test the database connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to the PostgreSQL database');
  release();
});

// Use routes (your route imports will go here)
app.use('/api/auth', authRoutes);

app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

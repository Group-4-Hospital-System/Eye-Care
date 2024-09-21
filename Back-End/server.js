const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const Stripe = require("stripe");
const pool = require("./config/db"); // Import the database pool
const authRoutes = require("./routes/authRoutes"); // Import your auth routes
const payment = require("./routes/payment");
const Profile = require("./routes/profileRout");
const cookieParser = require("cookie-parser");
dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// Test the database connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("Connected to the PostgreSQL database");
  release();
});

// Use routes (your route imports will go here)
app.use("/api/auth", authRoutes);
app.use("/api/auth", payment);
app.use("/api/auth", Profile);
 
// http://localhost:5173/api/auth/pay

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

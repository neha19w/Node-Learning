const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" })); // change if your React port differs

// Parse JSON
app.use(express.json());

// Routes
const healthRoutes = require("./routes/health.routes.js");
app.use("/api", healthRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error middleware (last)
const { errorHandler } = require("./middlewares/error.middleware.js");
app.use(errorHandler);

module.exports = app;
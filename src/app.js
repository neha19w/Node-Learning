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

app.use(cors());
app.use(express.json());

// Test route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend running ✅" });
});

// Error middleware (last)
const { errorHandler } = require("./middlewares/error.middleware.js");
app.use(errorHandler);

module.exports = app;
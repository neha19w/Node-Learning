const mongoose = require("mongoose");

/**
 * Connect to MongoDB database
 * @throws {Error} If connection fails
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "");
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("❌ MongoDB connection error:", errorMessage);
    process.exit(1);
  }
};

module.exports = connectDB;
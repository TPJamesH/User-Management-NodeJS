const mongoose = require("mongoose"); // Import the Mongoose library for MongoDB interactions

const connectDB = async (serviceName) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/customerDatabase"); // Connect to the MongoDB instance using the URI from the environment variables
    console.log(`Connected to MongoDB for ${serviceName}`); // Log successful connection with the service name
    // console.log(process.env.MONGO_URI)
  } catch (error) {
    console.error(`Error connecting to MongoDB for ${serviceName}:`, error.message); // Log the error with the service name
    process.exit(1); // Exit the process with a failure code (1) if the connection fails
  }
};

module.exports = { mongoose, connectDB }; // Export Mongoose instance and the connectDB utility function
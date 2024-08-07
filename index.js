// Import the express module
const express = require("express");

// Create an instance of express
const app = express();

// Define the port number
const PORT = 3000;

// Define a GET endpoint
app.get("/", (req, res) => {
  // Send a response with text and emoji when the endpoint is accessed
  res.send("My REST API V1 🚀");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

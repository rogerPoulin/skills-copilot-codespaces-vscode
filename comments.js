// Crate web server
const express = require("express");
const app = express();
const port = 3000;

// Import the comments
const comments = require("./comments");

// Use the comments
app.use("/comments", comments);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
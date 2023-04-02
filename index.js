const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const usersRouter = require("./routes/authRoutes");

// Configure body-parser to parse incoming JSON data
app.use(bodyParser.json());

// Connect to the MongoDB database
mongoose
  .connect(
    "mongodb+srv://contactus:bGXbz2XE0C2ghpPc@mobile-app.usk5k0w.mongodb.net/intellsightsApp?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });

// app.use("/api", usersRouter);

fs.readdirSync("./routes").map((r) =>
  app.use("/api", require(`./routes/${r}`))
);

// Define API routes
// const usersRoutes = require("./routes/users");
// app.use("/api/users", usersRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

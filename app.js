require("dotenv").config();

// async errors

const express = require("express");
const app = express();

// connect to database
const connectDB = require("./db/connect");

const notFoundMiddleware = require("./middleware/not-found");
const ErrorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send('<h1>Store api</h1> <a href="/api/v1/products">products routes</a>');
});

app.use(notFoundMiddleware);
app.use(ErrorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening to port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

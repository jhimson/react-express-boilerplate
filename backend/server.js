require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();

// * Setup built in express body-parser
// ! NOTE: Always setup the body-parser on top of the routes.
app.use(express.json());

// * Setup Cors Middleware (Cross-Origin Resource Sharing) allow all '*'
app.use(cors("*"));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.listen(PORT, async () => {
  try {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  } catch (err) {
    console.log(err);
  }
});

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Everyone, My name is Shakil Ahmed");
});

// Database connect

mongoose
  .connect(
    "mongodb+srv://Admin:CrudAdmin@crudapi.fxgmd4x.mongodb.net/CrudApi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log(`App is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

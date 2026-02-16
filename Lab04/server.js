require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      message: "Validation Error",
      error: error.message
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

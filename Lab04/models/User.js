const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Name is required"]
  },

  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [4, "Username must be at least 4 characters"],
    maxlength: [100, "Username cannot exceed 100 characters"]
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"]
  },

  phone: {
    type: String,
    required: [true, "Phone is required"],
    match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Phone must be in format 1-123-123-1234"]
  },

  website: {
    type: String,
    required: [true, "Website is required"],
    match: [/^https?:\/\/.+/, "Website must start with http or https"]
  },

  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: {
      type: String,
      required: true,
      match: [/^[A-Za-z\s]+$/, "City must contain only letters and spaces"]
    },
    zipcode: {
      type: String,
      required: true,
      match: [/^\d{5}-\d{4}$/, "Zipcode must be in format 12345-1234"]
    }
  },

  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true }
  }

});

module.exports = mongoose.model("User", userSchema);

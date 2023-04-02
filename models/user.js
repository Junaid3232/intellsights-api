const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 64,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    // validate: /^\d{3}-\d{3}-\d{4}$/, // validate using a regex pattern

    // validate: {
    //   validator: function (v) {
    //     return /\d{3}-\d{3}-\d{4}/.test(v);
    //   },
    //   message: (props) =>
    //     `${props.value} is not a valid phone number! Please enter a phone number in the format.`,
    // },
  },
});

module.exports = mongoose.model("User", UserSchema);

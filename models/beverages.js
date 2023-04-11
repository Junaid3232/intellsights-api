const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({});

const BeverageModel = mongoose.Schema({
  shopImage: {
    data: Buffer,
    contentType: String,
  },
  beverageImage: {
    data: Buffer,
    contentType: String,
  },
  latitude: {
    type: String,
  },
  longitute: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  packSize: {
    type: String,
    required: true,
  },
  pay: {
    type: String,
    required: true,
  },
  purchasedItem: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AddBeverage", BeverageModel);

const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  latitude: {
    type: String,
  },
  longitute: {
    type: String,
  },
});

const BeverageModel = mongoose.Schema({
  shopImage: {
    data: Buffer,
    contentType: String,
  },
  beverageImage: {
    data: Buffer,
    contentType: String,
  },
  location: { type: locationSchema },
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

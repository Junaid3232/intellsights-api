const BeverageModel = require("../models/beverages");
const multer = require("multer");
const fs = require("fs");

module.exports.addBeverage = async (req, res) => {
  try {
    const { latitude, longitute, name, packSize, pay, purchasedItem, status } =
      req.body;
    let beverageImage = null;
    let shopImage = null;
    if (req.files.length == 1) {
      shopImage = {
        data: req?.files["shopImage"][0]?.path,
        contentType: "image/png",
      };
    } else if (req.files.length == 2) {
      beverageImage = {
        data: req?.files["beverageImage"][0]?.path,
        contentType: "image/png",
      };
    }
    if (!name) {
      res.status(400).json({ isSuccess: false, message: "Name is required" });
    }
    if (!packSize) {
      res
        .status(400)
        .json({ isSuccess: false, message: "Pack size is required" });
    }
    if (!pay) {
      res.status(400).json({ isSuccess: false, message: "Pay is required" });
    }
    if (!purchasedItem) {
      res
        .status(400)
        .json({ isSuccess: false, message: "Purchase Item is required" });
    }
    if (!status) {
      res.status(400).json({ isSuccess: false, message: "Status is required" });
    }

    const beverage = new BeverageModel({
      shopImage,
      beverageImage,
      latitude,
      longitute,
      name,
      packSize,
      pay,
      purchasedItem,
      status,
    });

    await beverage.save();

    res.status(200).json({
      isSuccess: true,
      message: "Beverage added successfully!",
    });
  } catch (err) {
    console.log("---eeror", err);
    res.status(400).json({
      isSuccess: false,
      message: err,
    });
  }
};

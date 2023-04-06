const UserModal = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/Auth");

module.exports.register = async (req, res) => {
  try {
    const { firstName, lastName, password, email, phoneNumber } = req.body;
    if (!firstName) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "First name is required" });
    }
    if (!lastName) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Last name is required" });
    }
    if (!password || password.length < 6) {
      return res.status(400).json({
        isSuccess: false,
        message: "Password is required and should be 6 character long",
      });
    }
    if (!phoneNumber) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Phone number is required" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Email is required" });
    }
    const isExit = await UserModal.findOne({ email: email });
    if (isExit) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Email is already exist" });
    }

    const cryptedPassword = await hashPassword(password);

    const userModel = {
      firstName,
      lastName,
      password: cryptedPassword,
      email,
      phoneNumber,
    };

    const user = await UserModal.create(userModel);

    if (!user) {
      return res
        .status(200)
        .json({ isSuccess: false, message: "User not found" });
    }
    res
      .status(200)
      .json({ isSuccess: true, message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ isSuccess: false, message: err?.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    console.log("---LOGIN", req.body);
    const { email, password } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Email is Required" });
    }
    if (!password) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Password is Required" });
    }
    const user = await UserModal.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "User not found" });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Wrong Password" });
    }
    user.password = undefined;
    res.status(200).json({
      isSuccess: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ isSuccess: false, message: error.message });
  }
};
module.exports.test = async (req, res) => {
  return res.status(200).json("API App is Running!");
};

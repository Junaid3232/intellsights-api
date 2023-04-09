const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const questionController = require("../controllers/questionsController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/", authController.test);
router.get("/get-emotional-questions", questionController.questions);
router.get(
  "/get-profile-questions",
  questionController.profileQuestionsController
);

module.exports = router;

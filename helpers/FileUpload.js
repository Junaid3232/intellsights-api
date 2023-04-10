const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).fields([
  { name: "shopImage", maxCount: 1 },
  { name: "beverageImage", maxCount: 8 },
]);

module.exports = upload;

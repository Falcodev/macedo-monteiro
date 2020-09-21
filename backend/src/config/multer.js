const multer = require("multer");
const path = require("path");

const multerConfig = multer({
  storage: multer.memoryStorage(),
});

module.exports = {
  storage: multerConfig.storage,
  fileFilter: (req, file, cb) => {
    if (path.extname(file.originalname) !== ".pdf") {
      return cb(new Error("Invalid file type."));
    }
    return cb(null, true);
  },
};

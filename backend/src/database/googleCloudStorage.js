const { Storage } = require("@google-cloud/storage");
const path = require("path");

const serviceKey = path.join(__dirname, "..", "config", "key.json");

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_ID,
  keyFilename: serviceKey,
});

module.exports = storage;

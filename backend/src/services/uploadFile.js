const util = require("util");

const gc = require("../database/googleCloudStorage");
const bucket = gc.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME);

const uploadFile = (file) =>
  new Promise((resolve, reject) => {
    const { originalname, buffer } = file;

    const blob = bucket.file(originalname.replace(/ /g, "_"));
    const blobStream = blob.createWriteStream({
      resumable: false,
    });
    blobStream
      .on("finish", () => {
        const publicUrl = util.format(
          `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        );
        resolve(publicUrl);
      })
      .on("error", (err) => {
        reject(`Unable to upload image, something went wrong`);
      })
      .end(buffer);
  });

module.exports = uploadFile;

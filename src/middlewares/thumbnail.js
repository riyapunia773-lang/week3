const sharp = require('sharp');

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const thumbnailPath = `uploads/${req.file.filename}_thumb.png`;

  await sharp(req.file.path)
    .resize(160, 160)
    .png()
    .toFile(thumbnailPath);

  req.file.thumbnail = thumbnailPath;

  next();
};

module.exports = createThumbnail;
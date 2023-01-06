const Jimp = require("jimp");

const jimp = async(image) => {
    const avatar = await Jimp.read(image);
    avatar.resize(250, 250);
    await avatar.writeAsync(image);
};

module.exports = jimp;

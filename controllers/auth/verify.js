const User = require("../../models/user");
const { HttpError } = require("../../helpers/index");

const verify = async (req, res) => {
  try {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });

  if (!user) {
    throw HttpError(404);
    }

  await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: "" });

  res.json({message: 'Verification successful'});
  } catch (error) {
    console.log(error)
  }
};

module.exports = verify;

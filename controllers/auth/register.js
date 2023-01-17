const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const {nanoid} = require("nanoid");

const User = require("../../models/user");
const { HttpError, sendVerifycation } = require("../../helpers/index");

const register = async (req, res, next) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      throw HttpError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const avatarURL = gravatar.url(email);
    const verificationToken = nanoid();

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
      avatarURL,
      verificationToken,
    });

    console.log(newUser._id)

    const verifyEmail = {
      to: email,
      subject: "Please verify your email",
      html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}">Verify email</a>`
    }

    await sendVerifycation(verifyEmail);

    res.status(201).json({
      email: newUser.email,
      subscription: newUser.subscription,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;

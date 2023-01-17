const User = require("../../models/user");
const { HttpError, sendVerifycation } = require("../../helpers/index");

const resendTokenEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = User.findOne({ email });
  
    if (!user) {
      throw HttpError(400, "Missing required field email");
    }
    if (user.verify) {
      throw (HttpError(400, "Verification has already been passed"));
    }

    const verifyEmail = {
      to: email,
      subject: "Please verify your email",
      html: `<a target=_blank href="http://localhost:3000/api/users/verify/${user.verificationToken}">Verify email</a>`,
    };

      await sendVerifycation(verifyEmail);
      
      res.json({
          message: "Verify email resend"
      })
  } catch (error) {
      console.log(error)
  }
};

module.exports = resendTokenEmail;

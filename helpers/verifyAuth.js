const sgMail = require('@sendgrid/mail');
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendVerifycation = async (data) => {
    try {
        const msg = {...data, from: "stranger1301078@gmail.com"}
        await sgMail.send(msg)
    } catch (error) {
        console.error(error)
    }
}

module.exports = sendVerifycation;
const register = require('./register');
const login = require('./login');
const current = require('./current');
const logout = require('./logout');
const subscription = require('./subscription');
const upload = require('./upload');
const updateAvatar = require('./updateAvatar');
const verify = require('./verify');
const resendTokenEmail = require('./resendTokenEmail');

module.exports = {
    register,
    login,
    current,
    logout,
    subscription,
    upload,
    updateAvatar,
    verify,
    resendTokenEmail
}
const {addSchema, patchSchema} = require('./add-patch-schema');
const {registerSchema, loginSchema, EmailResendSchema} = require('./login-register-schema');


module.exports = {
    addSchema,
    patchSchema,
    registerSchema,
    loginSchema, 
    EmailResendSchema
}
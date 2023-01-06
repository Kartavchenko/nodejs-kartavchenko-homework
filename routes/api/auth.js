const express = require("express");
const router = express.Router();

const { validateBody, authenticate, upload } = require('../../middlewares/index');
const { registerSchema, loginSchema } = require('../../Schemas/index');
const controller = require('../../controllers/auth/index');

router.post("/register", validateBody(registerSchema), controller.register);

router.post("/login", validateBody(loginSchema), controller.login);

router.get("/current", authenticate, controller.current);

router.post("/logout", authenticate, controller.logout);

router.post("/avatars", upload.single('avatar'), controller.upload);

router.patch("/avatars", authenticate, upload.single('avatar'), controller.updateAvatar);

module.exports = router;
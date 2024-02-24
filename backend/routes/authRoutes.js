const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');
const upload = require("../middleware/multerMiddleware.js");
const { verifyJWT } = require('../middleware/authMiddleware.js');

router.post('/register', upload.single("avatar"), authController.register);
router.post('/login', authController.login);
router.patch('/change-password', verifyJWT, authController.changePassword);

router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:token', authController.resetPassword);

module.exports = router;

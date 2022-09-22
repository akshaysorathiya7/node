const { Router } = require('express');
const authController = require('../controller/authControler');

const router = Router();

router.get('/singup', authController.singup_get);
router.post('/singup', authController.singup_post);
router.get('/login', authController.login_get_get);
router.postget('/login', authController.login_post);

module.exports = router;

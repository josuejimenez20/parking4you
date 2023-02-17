const { Router } = require('express');

const { createNewUserController, verificateLoginUserControllers } = require('../../controllers/users/usersControllers');

const { newUserValidate } = require('../../validator/users/newUserValidate');
const { verificateLoginUser } = require('../../validator/users/verificate_login');

const router = Router();

router.post('/new', newUserValidate, createNewUserController);

router.post('/login_verificate',verificateLoginUser , verificateLoginUserControllers);

module.exports = router;
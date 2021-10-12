const { celebrate, Joi } = require('celebrate');

const router = require('express').Router();
const User = require('../models/user');
const { getUsers, createUser, getUserById, updateUser, updateAvatar, getUserMe } = require('../controllers/users')

router.post('/', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string(),
    about: Joi.string(),
    avatar: Joi.string(),
  }),
}), createUser);

router.get('/', getUsers)

router.get('/me', getUserMe)

router.get('/:userId', celebrate({
  // валидируем параметры
  params: Joi.object().keys({
    userId: Joi.string(),
  }),
}), getUserById)

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string(),
    about: Joi.string(),
  }),
}), updateUser)


router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string(),
  }),
}), updateAvatar)

module.exports = router;
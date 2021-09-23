const router = require('express').Router();
const User = require('../models/user');
const { getUsers, createUser, getUserById, updateUser, updateAvatar } = require('../controllers/users')

router.post('/', createUser); 

router.get('/', getUsers)

router.get('/:userId', getUserById)

router.patch('/me', updateUser)

router.patch('/me/avatar', updateAvatar)

module.exports = router;
const { model } = require('mongoose');
const User = require('../models/user');

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body; // получим из объекта запроса имя и описание пользователя

  User.create({ name, about, avatar })
  .then(user => res.send(user))
  .catch((err) => {
    if (err.name == "ValidationError") {
      return res.status(400).send({ message: 'Переданы некорректные данные при создании пользователя' });
    }
    res.status(500).send({ message: 'Произошла ошибка' })
  })
}

module.exports.getUsers = (req, res) => {
  User.find({})
  .then(users => res.send(users))
  .catch(err => res.status(500).send({ message: 'Произошла ошибка' }))
}

module.exports.getUserById = (req, res) => {
  const id = req.params.userId

  User.find({ _id: id })
  .then((user) => {
    res.send(user)
  })
  .catch((err) => {
    if (err.name == "CastError") {
      return res.status(404).send({ message: 'Пользователь по указанному _id не найден' });
    }
    res.status(500).send({ message: 'Произошла ошибка' })
  })
}

module.exports.updateUser = (req, res) => {
  const userId = req.user._id;
  const { name, about } = req.body;

  User.findByIdAndUpdate(userId, { name, about })
  .then(user => res.send(user))
  .catch((err) => {
    if (err.name == "CastError") {
      return res.status(404).send({ message: 'Пользователь по указанному _id не найден' });
    }
    if (err.name == "ValidationError") {
      return res.status(400).send({ message: 'Переданы некорректные данные при обновлении профиля' });
    }
    res.status(500).send({ message: 'Произошла ошибка' })
  })
}

module.exports.updateAvatar = (req, res) => {
  const userId = req.user._id;
  const { avatar } = req.body;

  User.findByIdAndUpdate(userId, { avatar })
  .then(user => res.send(user))
  .catch((err) => {
    if (err.name == "CastError") {
      return res.status(404).send({ message: 'Пользователь по указанному _id не найден' });
    }
    if (err.name == "ValidationError") {
      return res.status(400).send({ message: 'Переданы некорректные данные при обновлении профиля' });
    }
    res.status(500).send({ message: 'Произошла ошибка' })
  })
}
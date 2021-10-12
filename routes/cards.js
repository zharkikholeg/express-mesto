const router = require('express').Router();
const Card = require('../models/card');
const { celebrate, Joi } = require('celebrate');
const { getCards, createCard, deleteCard, cardAddLike, deleteCardLike } = require('../controllers/cards')


router.get('/', getCards)

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string(),
    link: Joi.string(),
  }),
}), createCard)

router.delete('/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string(),
  }),
}), deleteCard)

router.put('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string(),
  }),
}), cardAddLike)

router.delete('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string(),
  }),
}), deleteCardLike)

module.exports = router;
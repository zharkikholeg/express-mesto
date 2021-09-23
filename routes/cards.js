const router = require('express').Router();
const Card = require('../models/card');
const { getCards, createCard, deleteCard, cardAddLike, deleteCardLike } = require('../controllers/cards')


router.get('/', getCards)

router.post('/', createCard)

router.delete('/:cardId', deleteCard)

router.put('/:cardId/likes', cardAddLike)

router.delete('/:cardId/likes', deleteCardLike)

module.exports = router;
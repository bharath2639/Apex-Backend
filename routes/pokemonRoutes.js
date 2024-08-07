const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/pokemon', pokemonController.getAllPokemon);
router.post('/pokemon', pokemonController.addPokemon);
router.delete('/pokemon/:ownerName', pokemonController.deletePokemon);
router.delete('/pokemon', pokemonController.deleteAllPokemon);

module.exports = router;
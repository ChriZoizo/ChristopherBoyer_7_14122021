/* Modules */
const express = require('express')
const router = express.Router()
/*Importations du controlleurs 'user' et de ses fonctions */
const userController = require('../controllers/user')

/* Parametrage des routes/points d'arrêts et fonctions du controlleurs liés */
router.get('/', userController.getAllUsers) 
router.get('/:id', userController.getOneUser)

/* Export du routeur et de ses fonctions */
module.exports = router
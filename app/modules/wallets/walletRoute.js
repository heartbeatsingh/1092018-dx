var express = require('express');
var router = express.Router();

var walletController = require('./controllers/walletController');
var walletRules = require('./rules/wallet');

//router.get('/:id', walletController.test);
router.post('/create', walletRules.createWallet,walletController.createWallet);
module.exports = router;
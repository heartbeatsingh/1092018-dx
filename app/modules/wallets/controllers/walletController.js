var ethHelper = require('../helper/funs');

var walletController = {

    createWallet: async (req, res, next) => {
        ethHelper.createWallet(req, res, next);
    }
   
};
module.exports = walletController;
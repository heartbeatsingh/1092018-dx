var tblWallet = require('../modules/wallets/schemas/walletSchema');

module.exports = {

    createWallet: async (req, res, next) => {
        try {
            var addWallet = await tblWallet.create(req.body);
            return addWallet;           
        } catch (error) {
            return `${error}`;            
        }       
    },

    updateWallet : async (req, res, next) => {
        try {
            var upateWallet = tblWallet.update(req.body,{where:{id:req.params.id}});
            return upateWallet;
        } catch(srror) {
            return error;
        }
    },

    deleteWallet : async (req, res, next) => {
        try {
            var deleteWallet = tblWallet.destroy({where:{id:req.params.id}});
            return deleteWallet;
        } catch(error) {
            return error;
        }
    },

}
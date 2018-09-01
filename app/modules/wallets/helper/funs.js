var helper = require('../../../helpers/common');
var consta = require('../../../helpers/consta');
require('./webthree');

var ethWallet = {

    /**
     * There are two functions inside the createWallet() function.
     * - createEthWalletAddress() will generate and return eth address and private key.
     * - createWallet() this function is located inside the helper, that is mentioned above. It's saving
     * the new created wallet address and private key into the database. 
     */

    createWallet: async (req,res,next) => {
        try {
            var isWalletCreated = await createEthWalletAddress();   
            req.body.w_address = isWalletCreated.address;
            req.body.w_secret = isWalletCreated.privateKey;
            req.body.currency_type = 'eth';
            var isInfoAdded = await helper.createWallet(req,res,next);
            if(typeof isInfoAdded.id == 'undefined'){
                return res.status(401).send({status:false, message: consta.walletCreateErr, error: isInfoAdded});
            }else{
                return res.status(200).send({status:true, message: consta.walletCreate, walletAddress: isWalletCreated.address});
            }            
        } catch (error) {
            return res.status(403).send({status:false,message: consta.walletCreateErr,error:error});
        }
    }

}

module.exports  =  ethWallet;
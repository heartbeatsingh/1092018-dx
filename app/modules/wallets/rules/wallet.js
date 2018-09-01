var walletRules = {
/**
 *  will add brief rules
 */

    createWallet: async (req, res, next) => {
        req.checkBody('user_id', 'user_id is required').notEmpty();
        var errors = req.validationErrors();
        if(errors){
            return res.send({status:false,errors:errors});
        }
        return next();       
    }

};
module.exports = walletRules;
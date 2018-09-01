var Web3 = require('web3');
var netEnv = 'https://ropsten.infura.io/v3/b9c14ab335e84cebb4868a302c0fa74b';
var web3 = new Web3(new Web3.providers.HttpProvider(netEnv));
web3.eth.net.isListening().then(() => console.log('web3 connected with server')).catch(e => console.log('web3 NOT connected with server'));

var Accounts = require('web3-eth-accounts');
var accounts = new Accounts(netEnv);

/**
 * Generating new wallet adderss.
 */
createEthWalletAddress = async function(){
    return await web3.eth.accounts.create();
}


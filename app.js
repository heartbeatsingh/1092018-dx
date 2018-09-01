const express = require('express');
var app = express();
var expressValidator = require('express-validator');
const PORT = process.env.PORT || 3001;
var server = app.listen(PORT,function(){console.log("Server connected...")});
var walletRoute = require('./app/modules/wallets/walletRoute');
var bodyParser = require('body-parser');
var request = require('supertest');
app.use(bodyParser.json());


/**
 * 
 */
app.use(expressValidator({
    customValidators: {
       inArray: function(value) {
          var currencyType = ["eth","btc"]; 
          return currencyType.indexOf(value) > -1;
       },
    }
  }));
  
/**
 * 
 */
app.use('/api/v1/wallet', walletRoute);

app.get('/', function(req,res){
  res.status(200).json({ok:'ok'});
})


module.exports = app;
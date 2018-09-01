var request = require('supertest');
var assert = require('assert');
var app = require('../app');

describe('Ethereum wallet creation test.', function() {

/**
 * Ethereum create wallet case.
 * Un-comment the send object and pass the user_id.
 * For check validation just stop the @params send into the request or comment that line. 
 */

  it('Create wallet process', function(done) {
	  request(app)
      .post('/api/v1/wallet/create')
      .send({user_id:3})
      .set('Accept', /application\/json/)
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200)
      .end(function(err, res) {
      if (err) return done(err);
        console.log(res.body);
        done();
      });
  });

  
  
  

});
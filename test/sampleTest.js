// This example test file is way bloated and unorganized, but is mean to demonstrate a wide breadth of features.
// In this file I:
// - Run basic tests to show mocha/chai assert syntax
// - Test API endpoints
// - Use Sinon to create stubs and mocks.

// Basic definitions:
// Mocha - test framework (write and run tests)
// Chai - assertion library. Provides basic asserts, 'should' and 'expect' TDD language asserts
// Sinon - Allows us to make stubs, mocks, and fake servers to remove dependencies in our tests.

/* // uncomment to run

var chai = require('chai');
var assert = chai.assert;
//var expect = chai.expect; // If I hate myself.
//var should = chai.should;

// For testing API
var chaiHttp = require('chai-http'); // Chai plugin to test api
var server = require('../app'); // My app server
chai.use(chaiHttp);

// Set up sinon for mocks, stubs, spies, and fake server.
var sinon = require('sinon');
beforeEach(function() {
  this.sinon = sinon.sandbox.create();
});

afterEach(function(){
  this.sinon.restore();
});

// All tests are automatically run synchronously. Here are some basic tests
describe('TEST Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });

    it('should return the correct corresponding index, x, to value, y, when y is present in the array', function(){
      assert.equal(2, [1, 2, 3].indexOf(3));
      assert.equal(0, [1, 2, 3].indexOf(1));
    });

    // This is a pending test, or TODO test. No callback provided.
    it('should return -1 when the value is not present');
  });
});

// Data driven test (using sinon stub for simplicity).
describe('TEST Prime', function(){
  describe('#isPrime()', function(){
    var isPrimeStub = sinon.stub().returns(true);
    var primeNumbers = [2, 3, 5, 53, 443, 977];
    primeNumbers.forEach(function(primeNumber) {
      it("should return true for all prime numbers", function() {
        assert.isTrue(isPrimeStub(primeNumber));
      });
    });
  });
});

describe('TEST API', function(){
  describe('test API', function(){
    it("should return good status code and message on /test GET", function(done){
      chai.request(server)
        .get('/api/test')
        .end(function(err, res){

          assert.equal(res.status, 200);
          assert.isNotNull(res.body.message, "Property 'message' does not exist on response.");
          assert.isDefined(res.body.message, "Property 'message' does not exist on response.");
          assert.equal("Successfully performed 'get' operation on server.", res.body.message);

          // Asynchronous functions simply return 'done' (and include as param above)
          done();
        });
    });

    it("should return good status code and message on /test POST", function(done){
      chai.request(server)
        .post('/api/test')
        .send({'name': 'Doesnt Matter'})
        .end(function(err, res){
            assert.equal(res.status, 200);
            assert.isNotNull(res.body.message, "Property 'message' does not exist on response.");
            assert.isDefined(res.body.message, "Property 'message' does not exist on response.");
            assert.equal("Successfully performed 'post' operation on server.", res.body.message);

            done();
        });
    });
  });
});

*/ // uncomment to run

// OTHER FEATURES
// - To execute an asynchronous test, add a callback 'done()' to 'it'
// - Can add 'before', 'after', 'beforeEach', and 'afterEach' hooks to test blocks and files.
// - Can setTimeout(cb, x) / this.timeout(x) in a test

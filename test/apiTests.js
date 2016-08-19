process.env.NODE_ENV = 'test'; // Use correct MongoDB (and test env in general).

var chai = require('chai');
var assert = chai.assert;

var chaiHttp = require('chai-http'); // Chai plugin to test api
var server = require('../app'); // My app server
chai.use(chaiHttp);

var mongoose = require('mongoose');

/*
 * GET HEARTBEAT FROM API
 */
describe('--- EXPRESS SERVER ---', function(){
  describe('Express app API', function(){
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

    it("should return a 404 not found error for unknown route '/unknown' GET", function(done){
      chai.request(server)
        .get('/api/unknown')
        .end(function(err, res){
          assert.equal(res.status, 404);

          done();
        });
    });
  });
});

/*
 * GET HEARTBEAT FROM MONGOOSE
 */
describe('--- API DATA / MONGO DB ---', function(){
  describe('Express API interacting with Mongoose', function(){

    var existingTestDataId = '57b1702a03e6b25ae9f99e42';
    var nonExistentTestDataId = '57b1702a03e6b25ae9f99e40';
    var newTestDocumentId = -1;

    it('should return a persisting document when requested by id', function(done){
      this.timeout(10000); // Mongoose will still be initializing here.

      chai.request(server)
        .get('/api/testdata/' + existingTestDataId)
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.name, 'Finally First Example');
          assert.isNotNull(res.body.data);
          assert.equal(res.body.data.length, 1);
          assert.equal(res.body.data[0].name, 'First subdocument');
          assert.equal(res.body.data[0].data, 9);

          done();
        });
    });

    it('should fail when trying to look up a non-existing document by id.', function(done){
      chai.request(server)
        .get('/api/testdata/' + nonExistentTestDataId)
        .end(function(err, res){

          assert.equal(res.status, 404);
          assert.equal(res.body.message, "Document not found.");

          done();
      });
    });

    it('should successfully create a new document in Mongo.', function(done){
      chai.request(server)
        .post('/api/testdata')
        .send({
          'name': 'New Test Document',
          'data': [
            {
                'name': 'New Test SubDocument',
                'data': 1
            }
          ]
        })
        .end(function(err, res){

          assert.equal(res.status, 201);
          assert.isNotNull(res.body._id);
          assert.isDefined(res.body._id);
          newTestDocumentId = res.body._id;

          assert.equal(res.body.name, 'New Test Document');
          assert.isNotNull(res.body.data);
          assert.equal(res.body.data.length, 1);
          assert.equal(res.body.data[0].name, 'New Test SubDocument');
          assert.equal(res.body.data[0].data, 1);

          done();
      });
    });

    it('should fail to create a new document with missing data in Mongo.', function(done){
      chai.request(server)
        .post('/api/testdata')
        .send({
          'data': [
            {
                'name': 'New Test SubDocument',
                'data': 1
            }
          ]
        })
        .end(function(err, res){
          assert.equal(res.status, 300);
          assert.equal(res.body.message, 'Cannot create an Example without providing a name.');

          done();
      });
    });

    it('should successfully delete a document from Mongo.', function(done){
      chai.request(server)
        .delete('/api/testdata/' + newTestDocumentId)
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.message, 'Successfully deleted ' + newTestDocumentId + '.');

          done();
      });
    });

  }); // describe
});

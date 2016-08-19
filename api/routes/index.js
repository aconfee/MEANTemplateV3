var express = require('express');
var router = express.Router();

var ctrlTest = require('../controllers/test');
router.get('/test', ctrlTest.testGet);
router.post('/test', ctrlTest.testPost);

// Database
router.get('/testdata/:dataid', ctrlTest.testGetData);
router.post('/testdata', ctrlTest.testPostData);
router.delete('/testdata/:dataid', ctrlTest.testDeleteData);

module.exports = router;

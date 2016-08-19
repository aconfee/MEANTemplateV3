// This file is required by db.js, which is required by app.js.

var mongoose = require('mongoose');

var exampleSubdocument = new mongoose.Schema({
  name: String,
  data: Number
});

var exampleSchema = new mongoose.Schema({
  name: String,
  data: [exampleSubdocument]
});

// Compile schema
// Model name, schema, mongodb collection name (optional).
mongoose.model('Example', exampleSchema, 'Examples');

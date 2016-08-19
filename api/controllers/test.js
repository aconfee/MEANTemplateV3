var mongoose = require('mongoose');
var Example = mongoose.model('Example');

// Blank API call.
module.exports.testGet = function(req, res){
  res.status(200);
  res.json({message: "Successfully performed 'get' operation on server."});
};

module.exports.testPost = function(req, res){
  res.status(200);
  res.json({message: "Successfully performed 'post' operation on server."});
};

// API call to retrieve from database.
module.exports.testGetData = function(req, res){
  Example.findOne({ _id: req.params.dataid }, function(err, doc){
      if(err){
        console.log(err);
        res.status(400);
        res.json(err);
        return;
      }

      if(doc === null || doc === undefined){
        res.status(404);
        res.json({message: "Document not found."});
        return;
      }

      res.status(200);
      res.json(doc);
    });
};

// API call to add to database.
module.exports.testPostData = function(req, res){
  if(!req.body.name){
    res.status(300);
    res.json({message: 'Cannot create an Example without providing a name.'});
    return;
  }

  Example.create(
    req.body,
    function(err, doc) {
      if (err) {
        console.log(err);
        res.status(400);
        res.json(err);
      } else {
        res.status(201);
        res.json(doc);
      }
  });
};

module.exports.testDeleteData = function(req, res){
  Example.remove({_id: req.params.dataid }, function(err){
    if(err){
      res.status(500);
      res.json({"message": "Something went wrong trying to delete: " + req.params.dataid + ". " + err.message});
      return;
    }

    res.status(200);
    res.json({"message": "Successfully deleted " + req.params.dataid + "."});
  });
};

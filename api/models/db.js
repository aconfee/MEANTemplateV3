var mongoose = require('mongoose');
require('./example'); // Include in app since this file required in app.js.

var dbURI = 'mongodb://localhost/exampleApp';
if(process.env.NODE_ENV === 'production'){
  dbURI = process.env.MONGOLAB_URI; // MONGOLAB_URI has been added to Heroku for prod.
}
else if(process.env.NODE_ENV === 'test'){
  dbURI = process.env.TEST_MONGOLAB_URI; // TEST_MONGOLAB_URI has been added to .env and .travis.yml(encrypted) for test.
}

console.log("Connecting to URI: " + dbURI);
mongoose.connect(dbURI);

// Listen for Mongoose events.

mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err){
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function(){
  console.log('Mongoose disconnected.');
});

var gracefulShutdown = function(msg, callback){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

// Nodemon restarts
process.once('SIGUSR2', function(){
  gracefulShutdown('nodemon restart', function(){
    process.kill(process.pid, 'SIGUSR2');
  });
});

// App termination
process.on('SIGINT', function(){
  gracefulShutdown('app termination', function(){
    process.exit(0);
  });
});

// Heroku app termination
process.on('SIGTERM', function(){
  gracefulShutdown('Heroku app shutdown', function(){
    process.exit(0);
  });
});

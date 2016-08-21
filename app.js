require('dotenv').load(); // Load all env vars from .env

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./api/models/db'); // Mongoose

var apiRoutes = require('./api/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// API
app.use('/api', apiRoutes); // These routes will use the authentication above.

// API 404
app.use(function(req, res, next) {
  res.status(200);
  // If this is an api route that wasn't handled in /api above, throw error.
  if(req.originalUrl.indexOf("/api") !== -1){
    // No need to create full error to display since this is only relevant to the API.
    // Client will be redirected to Angular app (as expected for bad route).
    res.status(404);
  }

  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

// Serve our app to the browser. The Express static function will automatically
// default to any file called 'index'. So our angular index template is defaulted
// to without routing.
// All errors must be handled from Angular from here.
app.use('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// error handlers -- if shit has absolutely hit the fan and we get here.

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

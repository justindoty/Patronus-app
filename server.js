var express = require('express');
var index = require('./routes/index.js');
var people = require('./routes/people.js');
var patronuses = require('./routes/patronuses.js');
var app = express();

//static files
app.use(express.static('public'));



//routes
app.use('/', index)
app.use('/people', people);
app.use('/patronuses', patronuses);

//server listen
var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port);
});

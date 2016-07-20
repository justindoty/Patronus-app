var router = require('express').Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
var pg = require('pg');

var config = {
  database: 'patronusassigner',
  port: 5432
}

router.use(bodyParser.json());

router.get('/', function(request, response) {
  var client = new pg.Client(config);
  client.connect(function(err){
    if(err){
      console.log("Connection error: call an adult");
    }
    client.query('Select * from people', function(err, rows){
      if(err){
        console.log("query error");
        response.sendStatus(500);
      } else {
        console.log(rows);
        response.send(rows.rows);
      }
      client.end(function(err){
        if(err){
          console.log("end error");
        }
      });
    });
  })
})

router.post('/', function(request, response) {
  var client = new pg.Client(config);
  console.log(request.body);
  var people_first = request.body.firstName;
  var people_last = request.body.lastName;
  client.connect(function(err){
    if(err){
      console.log("Connection error: call an adult");
    }
    client.query('insert into people (first_name, last_name) values ($1, $2)',[people_first, people_last], function(err){
      if(err){
        console.log("query error");
        response.sendStatus(500);
      } else {

        response.sendStatus(200);
      }
      client.end(function(err){
        if(err){
          console.log("end error");
        }
      });
    });
  })
})


module.exports = router;

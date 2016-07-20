var router = require('express').Router();
var bodyParser = require('body-parser');

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
    client.query('Select * from patronuses', function(err, rows){
      if(err){
        console.log("query error");
        response.sendStatus(500);
      } else {
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
  var patronus = request.body.data;
  client.connect(function(err){
    if(err){
      console.log("Connection error: call an adult");
    }
    client.query('insert into patronuses (patronus_name) values ($1)',[patronus], function(err){
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

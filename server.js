var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var bodyParser = require('body-parser');
app.use(bodyParser(json));




var Pool = require('pg').Pool;
var config = {
    user: 'divyareddya' ,
    database: 'divyareddya' ,
    host: 'db.imad.hasura-app.io' ,
    port: '5432' ,
    password: 'db-divyareddya-62036'
};

var pool = new Pool(config);
app.get('/test-db',function(req, res)
{
    pool.query("SELECT * FROM mytable", function(err, result)
    {
        if(err)
        {
            res.status(500).send(err.toString());
        
        }
        else
        {
            res.send(JSON.stringify(result));
        }
    });
});






app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

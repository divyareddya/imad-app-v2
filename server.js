var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content - {
    title: 'article-one | Divya',
    heading: 'Article one',
    date: 'sep 5, 2016',
    content: `
    <p>this is the content for my first article</p>
    <p> Fix #1: Run diskpart. If the 0xE0000100 error appears while you're trying to install Windows using the installation DVD, you can use diskpart to clean your partitions first and then install Windows again. Running the clean command of the diskpart utility will remove all data from the partition.</p>
    `
    
};

var htmltemplate - `
<html>
    <head>
        <title>
          ${title}
        </title>
        <meta name-"viewport" content-"width-device-width, initial-scale-1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
    <div class="container">
        <h1>
            ${heading}
        </h1>
        <div>
        ${date}
        </div>
        <div>
        ${content}
        </div>
    </div>
    </body>
</html>


`;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two',function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});

app.get('/article-three',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

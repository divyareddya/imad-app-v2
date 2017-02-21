var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
    'article-one': {
    title: 'article-one | Divya',
    heading: 'Article one',
    date: 'sep 5, 2016',
    content:
    `<p>this is the content for my first article</p>
    <p> Fix #1: Run diskpart. If the 0xE0000100 error appears while you're trying to install Windows using the installation DVD, you can use diskpart to clean your partitions first and then install Windows again. Running the clean command of the diskpart utility will remove all data from the partition.</p> `
    
},
 'article-two': {
    title: 'article-two | Divya',
    heading: 'Article two',
    date: 'sep 10, 2016',
    content:
    `<p>this is the content for my second article</p>
    <p>To create a PivotTable:
Select the table or cells (including column headers) containing the data you want to use. ...
From the Insert tab, click the PivotTable command. ...
The Create PivotTable dialog box will appear. ...
A blank PivotTable and Field List will appear on a new worksheet</p>`

    
},
 'article-three':{
    title: 'article-third | Divya',
    heading: 'Article third',
    date: 'sep 15, 2016',
    content:
    `<p>this is the content for my third article</p>
    <p>The selected fields will be added to one of the four areas below the Field List. In our example, the Salesperson field has been added to the Rows area, while the Order Amount has been added to the Values area. Alternatively, you can click, hold, and drag a field to the desired area.</p>`
    
    
    
}
};




function createTemplate (data){
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;
    var htmltemplate = `
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
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req, res){
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
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

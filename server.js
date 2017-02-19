var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

    
//  Variable articles with objects as contents
var articles = {
    // Objects
    'article-one': {
                title: 'Article One | Charly Jose',
                heading: ' Article One',
                date: 'Feb 19, 2017',
                content:`
                        <p>This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. 
                        </p>
                        <p>This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article.  
                        </p>
                        <p>This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article.
                        </p>`
    }, 
    'article-two': {
                title: 'Article Two | Charly Jose',
                heading: ' Article Two',
                date: 'Feb 19, 2017',
                content:`
                        <p>
                            This is the content for the second article.
                        </p>`
    },
    'article-three': {
                title: 'Article Three | Charly Jose',
                heading: ' Article Three',
                date: 'Feb 19, 2017',
                content:`
                        <p>
                            This is the content for the thrid article.
                        </p>`
    }
};

// Function to manipulate the articleOne object
// backquote(`) to insert multiline string
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    // String variable
    
    var htmlTemplate =`
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
            <meta charset = "utf-8"/> 
            <link href="/ui/style.css" rel="stylesheet" />
             <meta name="viewport" content="width=device-width, intial-scale=1" />
        </head>
        <body>
            <div>
                <a href="/">Home</a>
             </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
             <div>
                 ${date}
            </div>
            <div>
                ${content}
            </div>
        </body>
     </html>
    `;
    return htmlTemplate;   // Returning the string file 

}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

// :articleName  --- A feature of Express framework  -- which converts :articleName to a variable
app.get('/:articleName', function(req,res){
    //  articleName == article-one    
    // Extracting the articleName value from :articleName
    var articleName = req.params.articleName;
    //  articles[articleaName] == {} content object for article one
    res.send(createTemplate(articles[articleName]));  //sending back a string file
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

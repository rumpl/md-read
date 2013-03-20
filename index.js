var fs = require('fs');
var readability = require('node-readability');
var md = require('html-md');

readability.read(process.argv[2], function(err, article) {
  var title = article.getTitle();
  var fileTitle = title.replace(/\ /g, '_') + '.md';
  var content = md(article.getContent());
  
  fs.writeFile(fileTitle, content, function (error) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file " + fileTitle + " was saved!");
    }
  });
});

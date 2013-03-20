var fs = require('fs');
var path = require('path');
var md = require('html-md');
var readability = require('node-readability');
var options;

try {
  options = require(path.join(process.env.HOME, '.md-read.json'));
} catch (e) {
  console.warn('.md-read.json file not found, creatin one with directory: ', process.cwd())
  options = { directory: process.cwd()};
  fs.writeFile(path.join(process.env.HOME, '.md-read.json'), JSON.stringify(options));
}

if (process.argv.length < 3) {
  console.error('Please give a URL');
} else {
  for (var i = 2; i < process.argv.length; i++) {
    read(process.argv[i]);
  }
}

function read(url) {
  readability.read(url, function (error, article) {
    if (error) {
      console.error(error);
    } else {
      writeArticle(article);
    }
  });
}

function writeArticle(article) {
  var title = cleanName(article.getTitle());
  var fileTitle = title.replace(/ /g, '_') + '.md';
  var content = md(article.getContent());

  fs.writeFile(path.join(options.directory, fileTitle), content, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("The file " + fileTitle + " was saved!");
    }
  });
}

function cleanName(name) {
  name = name.replace(/\s+/gi, '-');
  return name.replace(/[^a-zA-Z0-9\-]/gi, '');
}

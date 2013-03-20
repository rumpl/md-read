# md-read

Save articles on the web in Markdown.

`md-read` uses node-readability to extract an article from a web page and saves it to disk in Markdown format for
you to read later.

## Installation

```
npm install -g md-read
```

## Configuration

When first run it will create an .md-read.json file with the current directory as the default path for saving
articles.

The configuration is a simple json file with one key :
```javascript
{
    "directory": "/some/path"
}
```

Tip : put it in Dropbox for a free personal distributed read-it-later service.

## Usage

```
md-read <URL>
```

And it will save the file in the current directory in Markdown format

## License

[MIT](http://mit-license.org/rumpl)

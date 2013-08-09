/*! static-ng-doc v0.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */

 var http = require('http')
 , fs = require('fs')
 , request = require('request')
 , handlebars = require('handlebars');

 var template = fs.readFileSync("./index.html", "utf8")
 , keywords
 , directives
 , filters
 , services
 , types
 , globalAPIs;

 function onRequest(req, res) {
  request('http://docs.angularjs.org/docs-keywords.js', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      (function(body) {
        var NG_PAGES;
        eval(body);
        keywords = NG_PAGES.filter(function(listing) {
          return listing.section == 'api';
        });
      })(body);
      var pageBuilder = handlebars.compile(template);
      var pageText = pageBuilder({keywords: keywords});
      res.writeHead(200, {"Context-Type": "text/html"});
      res.write(pageText);
      res.end();
    }
  });
}

http.createServer(onRequest).listen(8000);
console.log("Server has started on port 8000.");

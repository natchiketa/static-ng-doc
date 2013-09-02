# static-ng-doc

Fetches the `docsData` Angular module, which holds a static array of paths to the AngularJS documentation, and implements a simple Angular app that renders links to each HTML partial as a simple static page.

**UPDATE Sept 2, 2013**: Using a Yeoman Angular project

First install dependencies:

    bower install && npm install

Then run from repo root:

    grunt server

To build a more portable set of files:

    grunt build

The build will be in the `dist` directory. The only resources required for the page to render are:

* The page itself, `dist/index.html`
* AngularJS itself, in `dist/bower_components/angular`. Use `angular.js` or `angular.min.js`, but remember to update the script tag's `src' attribute in `index.html`
* The script in `dist/scripts`, named something like `dc400848.scripts.js`
* `dist/views/main.html`


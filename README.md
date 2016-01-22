Deep Lab Frontend
---

This is the starting place for our Neural Network web interface.


###Run the code:

Prerequisites:

- [Node and NPM](https://nodejs.org/en/download/)
- [Gulp](http://gulpjs.com/)

I think once you have those you should be able to install the other dependencies using:

`npm install`


Then to run the code run this:

`gulp`

That command should start the server and open a browser window for you.

###Cool things to note:

I set up the gulpfile.js to watch for file changes, and browsersync will automatically refresh the browser window. I've integrated the SCSS css preprocessor and TypeScript compilation. Making a change to one of the TS files located in /app/ts will cause the browser to auto-update, likewise with CSS changes in the sass files at /app/scss/
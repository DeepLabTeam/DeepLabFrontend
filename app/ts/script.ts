/* See: http://www.finiterecursion.com/2015/02/getting-started-with-gulp-livereload-and-d3-js/ */
/// <reference path="test.ts" />
var data = [4, 8, 15, 16, 23, 42, 56, 82, 75, 50];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });

//Just a little test to see how multiple files interact:
var p = new Test.Person("andrew");

//This requires browserify or requirejs or something:
// var test = require('test');
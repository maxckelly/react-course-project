"use strict";

console.log("App.js is running");

// JSX - JavaScript XML
var template = React.createElement(
  "h2",
  null,
  "YES this did change"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

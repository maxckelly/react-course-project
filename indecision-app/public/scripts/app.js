"use strict";

console.log("App.js is running");

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h2",
        null,
        " My React Site "
    ),
    React.createElement(
        "p",
        null,
        " This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            " Item One "
        ),
        React.createElement(
            "li",
            null,
            " Item Two "
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        " Max Kelly "
    ),
    React.createElement(
        "p",
        null,
        " Age: 21 "
    ),
    React.createElement(
        "p",
        null,
        " Location: Melbourne, Victoria, Australia "
    )
);

var appRoot = document.getElementById("app");
var profileRoot = document.getElementById("profile");

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, profileRoot);

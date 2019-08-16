'use strict';

// JSX - JavaScript XML

// ---Template one---

var welcome = {
    title: 'Welcome to my app',
    subtitle: 'Its the indecision app, helping you make your decision',
    options: ['One ', 'Two ']
};

var todos = {
    todoOne: 'Walk the dogs'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        welcome.title
    ),
    welcome.subtitle && React.createElement(
        'p',
        null,
        welcome.subtitle
    ),
    React.createElement(
        'p',
        null,
        welcome.options.length > 0 ? 'Here are your options: ' + welcome.options : 'No options'
    )
);

// -- Template two ---
var user = {
    name: '',
    age: 17,
    location: 'Melbourne'
};

// Says if there is no location then the <p></p> doesn't show up
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : "Anonymous"
    ),
    " ",
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ' + user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");
var profileRoot = document.getElementById("profile");

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, profileRoot);

'use strict';

// JSX - JavaScript XML
var welcome = {
    title: 'Welcome to my app',
    subtitle: 'Its the indecision app, helping you make your decision'
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
    React.createElement(
        'p',
        null,
        welcome.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            todos.todoOne
        )
    )
);

var user = {
    name: 'Max',
    age: 21,
    location: 'Melbourne, Victoria, Australia'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name + '!'
    ),
    '  ',
    React.createElement(
        'p',
        null,
        'Age: ' + user.age
    ),
    React.createElement(
        'p',
        null,
        ' ',
        'Location: ' + user.location
    )
);

var appRoot = document.getElementById("app");
var profileRoot = document.getElementById("profile");

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, profileRoot);

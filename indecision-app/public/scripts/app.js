'use strict';

// JSX - JavaScript XML
// For JSX class needs to be called className

var welcome = {
    title: 'Welcome to my app',
    subtitle: 'Its the indecision app, helping you make your decision',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); // This removes the default action which was to refresh the page and put the data up into the URL

    var option = e.target.elements.option.value; // This basically creates a variable, then the event targets the element option what we created down in the name="option", it then returns the value

    if (option) {
        welcome.options.push(option); // This then pushes the input onto the array so it access const welcome, then goes down to options and then pushes the above option const into the option array
        e.target.elements.option.value = '';
    }
    renderApp(); // Once the function has completed it rerenders the app
};

// This removes all buttons and rerenders the app
var removeAllButton = function removeAllButton() {
    welcome.options = [];
    renderApp();
};

var appRoot = document.getElementById("app");

var renderApp = function renderApp() {

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
        ),
        React.createElement(
            'p',
            null,
            welcome.options.length
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item One'
            ),
            React.createElement(
                'li',
                null,
                'Item Two'
            ),
            React.createElement(
                'button',
                { onClick: removeAllButton },
                'Remove All'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();

//-- Template two ---
// const user = {
//     name: '',
//     age: 17,
//     location: 'Melbourne'
// };

// // Says if there is no location then the <p></p> doesn't show up
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : "Anonymous"}</h1>{" "}
//         {/* The above uses a ternary operator basically saying if user.name exists then display user.name if not then display anonymous  */}
//         {user.age && user.age >= 18 && <p>{`Age: ` + user.age}</p>}
//         {/* The above: 1. Checks if user.age exists and then checks if user.age is above or equal to 18 and if so displays the <p></p> tag  */}
//         {getLocation(user.location)}
//         {/* The above get the getLocation function and then if all correct displays the user.location.  */}
//     </div>
// );

// const profileRoot = document.getElementById("profile")
// ReactDOM.render(templateTwo, profileRoot);

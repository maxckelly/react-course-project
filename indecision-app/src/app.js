// JSX - JavaScript XML
// For JSX class needs to be called className

const welcome = {
    title: 'Welcome to my app',
    subtitle: 'Its the indecision app, helping you make your decision',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault(); // This removes the default action which was to refresh the page and put the data up into the URL

    const option = e.target.elements.option.value; // This basically creates a variable, then the event targets the element option what we created down in the name="option", it then returns the value

    if (option) {
        welcome.options.push(option); // This then pushes the input onto the array so it access const welcome, then goes down to options and then pushes the above option const into the option array
        e.target.elements.option.value = '';
    }
    renderApp(); // Once the function has completed it rerenders the app
}

// This removes all buttons and rerenders the app
const removeAllButton = () => {
    welcome.options = []
    renderApp()
}


const appRoot = document.getElementById("app");

const renderApp = () => {

    const template = (
        <div>
            <h2>{welcome.title}</h2>
            {welcome.subtitle && <p>{welcome.subtitle}</p>}
            <p>{welcome.options.length > 0 ? `Here are your options: ` + welcome.options : 'No options'}</p>
            <p>{welcome.options.length}</p>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
                <button onClick={removeAllButton}>Remove All</button>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

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

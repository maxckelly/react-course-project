// JSX - JavaScript XML
// For JSX class needs to be called className

// ---Template one---

const welcome = {
    title: 'Welcome to my app',
    subtitle: 'Its the indecision app, helping you make your decision',
    options: ['One ', 'Two ']
}

const todos = {
    todoOne: 'Walk the dogs'
}

const template = (
    <div>
        <h2>{welcome.title}</h2>
        {welcome.subtitle && <p>{welcome.subtitle}</p>}
        <p>{welcome.options.length > 0 ? `Here are your options: ` + welcome.options : 'No options'}</p>
    </div>
);


let count = 0
const addOne = () => {
    count ++; // This increases the count plus 1. The ++ is a short hand for saying count = count +1
    renderCounterApp()
}
const minusOne = () => {
    count -- // This decreases the count minus 1. The -- is a short hand for saying count = count -1
    renderCounterApp()
}
const reset = () => {
    count = 0
    renderCounterApp()
}



const appRoot = document.getElementById("app");


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} >+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
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

console.log("App.js is running");

// JSX - JavaScript XML
var template = (
  <div>
    <h2> My React Site </h2> 
    <p> This is some info</p>
    <ol>
        <li> Item One </li>
        <li> Item Two </li>
    </ol>
  </div>
);

var templateTwo = (
    <div>
        <h1> Max Kelly </h1>
        <p> Age: 21 </p>
        <p> Location: Melbourne, Victoria, Australia </p>

    </div>
);

var appRoot = document.getElementById("app");
var profileRoot = document.getElementById("profile")

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, profileRoot)

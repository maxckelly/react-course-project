// JSX - JavaScript XML
var welcome = {
    title: 'Welcome to my app',
    subtitle: 'Its the indecision app, helping you make your decision',
}

var todos = {
    todoOne: 'Walk the dogs'
}

var template = (
  <div>
    <h2>{welcome.title}</h2> 
    <p>{welcome.subtitle}</p>
    <ol>
        <li>{todos.todoOne}</li>
    </ol>
  </div>
);

var user = {
    name: 'Max',
    age: 21, 
    location: 'Melbourne, Victoria, Australia'
};

var templateTwo = (
    <div>
        <h1>{user.name + '!'}</h1>  {/* This pulls the data from userName and puts it in the h1. */}
        <p>{`Age: ` + user.age  }</p>
        <p> {`Location: ` + user.location}</p>
    </div>
);

var appRoot = document.getElementById("app");
var profileRoot = document.getElementById("profile")

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, profileRoot)

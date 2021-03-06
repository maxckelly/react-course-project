let count = 0;
const addOne = () => {
  count++; // This increases the count plus 1. The ++ is a short hand for saying count = count +1
  renderCounterApp();
};
const minusOne = () => {
  count--; // This decreases the count minus 1. The -- is a short hand for saying count = count -1
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

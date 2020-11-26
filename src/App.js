console.log('App.js is running!');

var app= {
    title: 'Indecision App',
    subtitle: 'Put ypur life in the hands of a computer',
    options: ['One', 'Two']
};
// JSX - JavaScript XML
var template = (
  <div> 
    <h1>Indecision App.js!</h1>
    <p>This is some info</p>
    <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
  </div>
);


let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

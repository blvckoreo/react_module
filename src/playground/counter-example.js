let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () =>{
    console.log('minusOne');
    count--;
    renderCounterApp();

};
const retest = () =>{
    console.log('retest');
    counr = 0;
    renderCounterApp();
};


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
);

ReactDOM.render(templateTwo,appRoot);

};

renderCounterApp();



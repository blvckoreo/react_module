//src/playground/es6-arrow-function-2.js --out-file=public/scripts/app.js --presets=env,react --watch

const add = function (a, b){
   // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

//this keyword
const user = {
    name: 'Tatenda',
    cities: ['London', 'New York', 'Toronto'],
    printPlacesLived () {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [ 1, 2, 3],
    multiplyBy: 2,
    multiply() {   
    return this.numbers.map((number) => number * this.multiplyBy);
    
}
};

console.log(multiplier.multiply());
//src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch


class Person {
    constructor(name = 'anonymous', age = 0)  {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return 'Hi. I am ${this.name}';
    }
    getDescription() {
        return '${this.name} is ${this.age} year(s) old.';
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    } 

    hasMajor(){
        return !!this.major
    }  
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ' Their major is ${this.major}.';
        }
   
        return description;
    }

}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        
        if (this.homeLocation) {
            greeting += ' I am visiting from ${this.homeLocation}';
        }

        return greeting
    }

}

const me = new Person('Tatenda Kumbula', 18, 'Alberton');
console.log(me.getGreeting());


const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());

let message = 'Hello World'

console.log(message);

function Person(name) {
    this.name = name;
    this.sayHi = function() {
        // ths function would cause a error as the function() create another scope,
        //which means that this.name is from window instead of the Person function
        // it would cause a undefined error.
        // setTimeout(function() {
        //     console.log('Hello my name is ' + this.name);
        // }, 1000)

        setTimeout(() => {
            console.log(`Hello my name is ${this.name}`);
        },1000);
    }
}

const person = new Person('Bob')
person.sayHi();


function sayHi(name) {
    this.name = name
    setTimeout(() => {
        console.log(`Hello my name is ${this.name}`);
    },1000);
}

function sayHi2(name) {
    this.name = name
    setTimeout(function(){
        console.log(`Hello my name is ${this.name}`);
    },1000);
}
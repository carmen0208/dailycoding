var message = 'Hello World';
console.log(message);
function Person(name) {
    this.name = name;
    this.sayHi = function () {
        // ths function would cause a error as the callback function()
        // inside setTimeout will have another context,
        // which means that if would check name from window context instead of the Person function
        // it would cause a undefined error.
        // setTimeout(function() {
        //     console.log('Hello my name is ' + this.name);
        // }, 1000)
        var _this = this;
        setTimeout(function () {
            console.log('Hello my name is ' + _this.name);
        }, 1000);
    };
}
var person = new Person('Bob');
person.sayHi();

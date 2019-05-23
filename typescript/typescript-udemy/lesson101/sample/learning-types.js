console.log('Section2');
var messages = "Hello World";
var counter = 1.2;
// be aware of 2 number calculation 0.6000000000000001
console.log(0.2 + 0.4);
console.log((Math.floor((0.2 + 0.4) * 1000)) / 1000);
var person2 = {
    firstName: 'Carmen',
    lastName: 'Liu',
    address: 'Guess where is my address'
};
function createHelloMessage(name) {
    return "Hello, my name is " + name;
}
var creator = createHelloMessage;
console.log(creator('carmen'));
var persons = ["AA", "NN", "SS"];
var counters = [0, 1, 2, 4, 5, 6, 7];
var tuple = ['Andy', 7];
// enum support
var PlayerPosition;
(function (PlayerPosition) {
    PlayerPosition[PlayerPosition["Guard"] = 0] = "Guard";
    PlayerPosition[PlayerPosition["Forward"] = 1] = "Forward";
    PlayerPosition[PlayerPosition["Center"] = 2] = "Center";
})(PlayerPosition || (PlayerPosition = {}));
var kobe = ["Kobe", PlayerPosition.Guard];
var james = ["James", PlayerPosition.Center];
var shap = ["Shaq", PlayerPosition.Forward];
var player = [kobe, james, shap];
console.log('enum test');
console.log(player);
// Null check
kobe = undefined;
// when javascript don't have return value, it returns undefined
// how typescript catch the error:
function createHelloMessage2(name) {
    if (name) {
        return "Hello, my name is " + name;
    }
    // if I didn't put this in place, the typescript check would have a error about undefined error
    return '';
}

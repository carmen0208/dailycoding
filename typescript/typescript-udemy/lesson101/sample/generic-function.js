var names = [
    { "name": "Superman" },
    { "name": "Batman" },
    { "name": "Green Lantern" },
    { "name": "Wonder Woman" },
    { "name": "Flash" }
];
function copyArray(orignal) {
    return orignal.slice(0);
}
var clone = copyArray(names);
// clone[0].name

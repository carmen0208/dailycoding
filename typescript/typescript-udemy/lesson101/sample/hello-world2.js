"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildPersonData_js_1 = require("./buildPersonData.js");
// function buildPersonData({firstName, lastName}, address) {
//     return `${firstName} ${lastName} ${address}`;
// }
var firstName = 'Carmen', lastName = 'Liu', partialAddress = ['New Zealand', 'Auckland', 'Valley Road'];
var personData = {
    firstName: firstName,
    lastName: lastName
};
var address = partialAddress.concat(['1024']);
console.log(buildPersonData_js_1.buildPersonData(personData, address));
//# sourceMappingURL=hello-world2.js.map
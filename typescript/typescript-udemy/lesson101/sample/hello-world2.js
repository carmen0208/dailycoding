// import {buildPersonData} from "./buildPersonData";
function buildPersonData(_a, address) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return firstName + " " + lastName + " " + address;
}
var firstName = 'Carmen', lastName = 'Liu', partialAddress = ['New Zealand', 'Auckland', 'Valley Road'];
var personData = {
    firstName: firstName,
    lastName: lastName
};
var address = partialAddress.concat(['1024']);
// console.log(buildPersonData(personData, address))

import {buildPersonData} from "./buildPersonData";

const firstName = 'Carmen',
    lastName = 'Liu',
    partialAddress = ['New Zealand', 'Auckland', 'Valley Road'];


const personData = {
    firstName,
    lastName
}

const address = [...partialAddress, '1024']

console.log(buildPersonData(personData, address))

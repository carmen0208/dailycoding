// const _:MyLodash = require('lodash')
// import * as _ from 'lodash'
import {_} from 'lodash'
const colors = ["Red", "Green", "Blue"]
const firstColor = _.first(colors)
console.log(firstColor)

interface Client {
  firstName: string;
  lastName: string;
}

interface Customer {
  firstName: string;
  lastName: string;
}

let client: Client = {
  firstName: 'Lily',
  lastName: 'Li'
}
let customer = client
import { User } from "./User";
import { Company } from "./Company";

import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

const customMap = new CustomMap("map");
customMap.addMarker(company);
customMap.addMarker(user);
// console.log(user);
// console.log(company);

interface IPet {
  name: string;
  age: number;
  favoritePark?:string
}


type ReadonlyPet = {
  // readonly means ever key would be readonly[name, age,]
  // -? means every properties not opional
  //+ is explicitly describe that all properties add +, but it's optional, you can not add is like:  // readonly [K in keyof IPet]-?: IPet[K];
  +readonly [K in keyof IPet]-?: IPet[K];
  // make all of them optional
  // readonly [K in keyof IPet]?: IPet[K];
}


const pet:IPet = {name: 'Buttons', age: 5}
const readonlyPet: ReadonlyPet = {
  name: 'Buttons',
  age: 5,
  favoritePark: 'Central'
}

pet.age =6
// error as age in readonly, not changeable
// readonlyPet.age = 7


const key: (keyof ReadonlyPet) = "name"
const readonlyPetname: string = readonlyPet[key];

console.log(readonlyPetname)
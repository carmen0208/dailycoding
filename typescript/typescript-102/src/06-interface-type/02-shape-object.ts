// SAME: both interface and type can be used to define the shape of object
interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

type AnimalTypeAlias = {
  age: number;
  eat(): void;
  speak(): string;
}

let animalInterface: IAnimal;
let animalTypeAlias: AnimalTypeAlias;

// type structure more like a object instead of class,
// when it been use, just asign as a object way. like age: 0, instead of class way
animalTypeAlias = {
  age : 0,
  eat() {
    console.log('I am full now')
  },
  speak() {
    return 'yayaya'
  }
}
animalTypeAlias.eat = () => console.log('I am eee')
animalInterface = animalTypeAlias;

animalInterface.eat()
export {};
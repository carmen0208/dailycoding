interface IDog {}
interface ICat {}

//Most of the times, type aliases in TypeScript are used to alias a more complex type
type Pet = IDog | ICat

//interface used for mor traditional OO purpose, define the shape of object and use it as a contract
interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}



function feedAnimal(animal:IAnimal) {
  animal.eat()
}

class Animal implements IAnimal {
  age = 0;
  eat() {
    console.log('I am full now')
  };
  speak() {
    return 'yayaya'
  };
}

export {};
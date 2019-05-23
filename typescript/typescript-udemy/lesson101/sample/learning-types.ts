console.log('Section2')

let messages = "Hello World"
let counter:number = 1.2

// be aware of 2 number calculation 0.6000000000000001
console.log(0.2 + 0.4)

console.log((Math.floor(( 0.2+0.4 )*1000))/1000)

interface HasName  {
  firstName: string;
  lastName: string;
}
type People = HasName & {address: string}

let person2: People = {
  firstName: 'Carmen',
  lastName: 'Liu',
  address: 'Guess where is my address'
}

//function type
// type MessageCreator = (name:string, extra?:number) => string;
interface MessageCreator {
  (name:string): string;
}
function createHelloMessage(name:string) :string {
  return `Hello, my name is ${name}`
}

const creator:MessageCreator = createHelloMessage;

console.log(creator('carmen'));

// array type defination
type ThreeStrings = [string, string, string];
let persons:ThreeStrings = ["AA", "NN", "SS"];
let counters:number[] = [0, 1, 2, 4,5,6,7];

type PlayerTuple = [string, number];
let tuple:PlayerTuple = ['Andy', 7]

// enum support
enum PlayerPosition {
  Guard,
  Forward,
  Center
}
let kobe: PlayerTuple | null | undefined = ["Kobe", PlayerPosition.Guard]
let james: PlayerTuple = ["James", PlayerPosition.Center]
let shap: PlayerTuple = ["Shaq", PlayerPosition.Forward]

let player: PlayerTuple[] = [kobe, james, shap];
console.log('enum test');
console.log(player);

// Null check
kobe = undefined

// when javascript don't have return value, it returns undefined
// how typescript catch the error:
function createHelloMessage2(name) : string {
  if(name) {
    return `Hello, my name is ${name}`
  }
  // if I didn't put this in place, the typescript check would have a error about undefined error
  return ''
}


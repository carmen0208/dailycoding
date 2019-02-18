// console.log('hello world from typescript')
// function greet(greeting: any, name:string = 'Lucy'):string {
//   return `${greeting}, ${name}`
// }

// const message:string = greet('Hello')

// using object
// function greet(options:{greeting: any, name:string}):string {
//   return `${options.greeting}, ${options.name}`
// }

// using object with descturction
// function greet({greeting, name}:{greeting: any, name:string}):string {
//   return `${greeting}, ${name}`
// }

// add Type
type Salutation = {greeting: any, name:string}
function greet({greeting, name}:Salutation):string {
  return `${greeting}, ${name}`
}

const message:string = greet({greeting:'Hello', name:"Lucy"})

console.log(message)
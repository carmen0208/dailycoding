
//make a generate <T>
function fill<T>(array: any[], value: T): T[] {
  return array.map(() => value)
}


const result = fill([1, 2, 3], "a")

const correctString = result.map(x=> x.toUpperCase())
console.log(correctString)
// result.map(x=> x/2)

const values = fill(["a", "b", "c"], 4)
const correctInt= values.map(x=> x/2)
console.log(correctInt)

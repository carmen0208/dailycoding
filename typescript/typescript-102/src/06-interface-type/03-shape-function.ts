// SAME: both interface and type can be used to  define function
type EatType = (food: string) => void
interface IEat {
  (food:string): void
}

const eat:EatType = (food: string) => {
  console.log(food)
}

export {};
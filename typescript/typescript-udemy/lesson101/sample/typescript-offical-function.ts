interface CircleShape {
  kind: "circle", radius: number
}
interface RectangleShape {
  kind: "rectangle", w: number, h: number
}

interface SquareShape {
  kind: "square", size: number
}

type ShapeF = CircleShape | RectangleShape | SquareShape

type calculateFunction = (shape: ShapeF) => number;

function CircleCalculate({radius} : CircleShape) {
  return Math.PI * radius ** 2;
}

function RectangleCalculate({w,h}: RectangleShape){
  return w + h;
}

function SquareCalculate({size}: SquareShape) {
  return size ** 2;
}

function handleCalculate(shape: ShapeF): number {
  return handlerCalculatorAreaRegistor[shape.kind](shape)
}

enum ShapeKind {
  circle = 'circle',
  rectangle = 'rectangle',
  square = 'square'
}
const handlerCalculatorAreaRegistor: { [key in ShapeKind]: calculateFunction} = {
  circle: CircleCalculate,
  rectangle: RectangleCalculate,
  square: SquareCalculate
}
const shapeF:ShapeF = {kind: "circle", radius: 10};
const areaF = handleCalculate(shapeF)
console.log(areaF)


// function getArea(shape: ShapeF) {
//   switch (shape.kind) {
//     case "circle":
//       return CircleCalculate(shape)
//     case "rectangle":
//       return RectangleCalculate(shape)
//     case "square":
//       return SquareCalculate(shape)
//   }
//   throw new Error("Invalid shape");
// }
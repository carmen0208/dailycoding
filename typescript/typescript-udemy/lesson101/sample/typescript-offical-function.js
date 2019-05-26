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
function CircleCalculate(shape) {
    return Math.PI * Math.pow(shape.radius, 2);
}
function RectangleCalculate(shape) {
    return shape.w + shape.h;
}
function SquareCalculate(shape) {
    return Math.pow(shape.size, 2);
}
function handleCalculate(shape) {
    return handlerAreaRegistor[shape.kind](shape);
}
var CalculatorInputType;
(function (CalculatorInputType) {
    CalculatorInputType["circle"] = "circle";
    CalculatorInputType["rectangle"] = "rectangle";
    CalculatorInputType["square"] = "square";
})(CalculatorInputType || (CalculatorInputType = {}));
var handlerAreaRegistor = {
    circle: CircleCalculate,
    rectangle: RectangleCalculate,
    square: SquareCalculate
};
var shapeF = { kind: "circle", radius: 10 };
var areaF = handleCalculate(shapeF);
console.log(areaF);

function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "rectangle":
            return shape.w + shape.h;
        case "square":
            return Math.pow(shape.size, 2);
    }
    throw new Error("Invalid shape");
}
var shapeF = { kind: "circle", radius: 10 };
var areaF = getArea(shapeF);
console.log(areaF);
//# sourceMappingURL=typescript-offical-function.js.map
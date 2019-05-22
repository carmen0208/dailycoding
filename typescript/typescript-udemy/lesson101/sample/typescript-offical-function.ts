type ShapeF =
  {kind: "circle", radius: number} |
  {kind: "rectangle", w: number, h: number} |
  {kind: "square", size: number}

function getArea(shape: ShapeF) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.w + shape.h
    case "square":
      return shape.size ** 2
  }
  throw new Error("Invalid shape");
}

const shapeF:ShapeF = {kind: "circle", radius: 10};
const areaF = getArea(shapeF)
console.log(areaF)
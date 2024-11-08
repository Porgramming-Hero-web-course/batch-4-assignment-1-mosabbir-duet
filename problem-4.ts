type Rectangle = {
  shape: string;
  width: number;
  height: number;
};

type Circle = {
  shape: string;
  radius: number;
};

const calculateShapeArea = (shapeType: Rectangle | Circle): number => {
  if ("radius" in shapeType) {
    return 3.1416 * shapeType.radius * shapeType.radius;
  } else {
    return shapeType.height * shapeType.width;
  }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

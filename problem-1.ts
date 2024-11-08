const sumArray = (param: number[]): number =>
  param.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

console.log(sumArray([1, 2, 3, 4, 5]));

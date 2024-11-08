const getProperty = <T, U extends keyof T>(person: T, key: U) => {
  return person[key];
};

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

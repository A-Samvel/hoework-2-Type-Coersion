// Task 3.4: Array-like Object

const array = {
  0: "item1",
  1: "item2",
  2: "item3",
};

array.toString = () => `${array["0"]},${array["1"]},${array["2"]}`;
console.log(String(array));

// Task 3.2 Product Price Calculation

const product = {
  name: "someProduct",
  price: 1000,
};

product.valueOf = () => product.price;

console.log(product + 500);
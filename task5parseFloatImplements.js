//Task 5  parseFloat implements

function myParseFloat(str) {
  if (typeof str !== "string") {
    return "The input should be a string";
  }

  str = str.trim();

  if (str.length === 0) {
    return NaN;
  }

  let sign = 1;
  let startIndex = 0;

  if (str[0] === "-") {
    sign = -1;
    startIndex = 1;
  } else if (str[0] === "+") {
    startIndex = 1;
  }

  const arr = str.split("");

  let res = [];

  for (let i = startIndex; i < arr.length; i++) {
    if (arr[i] === "." && res.indexOf(".") > 0) break;

    if (arr[i] === "." && res.indexOf(".") === -1) {
      res.push(arr[i]);
      continue;
    }

    if (Number.isNaN(+arr[i])) break;
    else res.push(arr[i]);
  }

  return sign * res.join("");
}

console.log(myParseFloat("-5%"));
console.log(myParseFloat("25.6.px"));

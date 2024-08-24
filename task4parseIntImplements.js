//task4

function myParseInt(str) {
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

  let res = ''

  for (let i = startIndex; i < arr.length; i++) {
    if (Number.isNaN(+arr[i])) break
    else res += arr[i]
  }

  return sign * res
}

console.log(myParseInt('5%'))
console.log(myParseInt('-25px'))

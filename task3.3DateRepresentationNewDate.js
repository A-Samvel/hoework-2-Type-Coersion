//Task 3.3  Date Representation

const date = {
  day: 15,
  month: 1,
  year: 2001,
};

date.toString = function () {
  let day = date.day < 10 ? `0${date.day}` : date.day;
  let month = date.month < 10 ? `0${date.month}` : date.month;
  return `${month}/${day}/${date.year}`;
};
date.valueOf = function () {
  let numDate = new Date(date.year, date.month, date.day);
  let days = Math.round(Math.round(Math.floor(numDate / 60000)) / 60 / 24);
  return days;
};

console.log(String(date));
console.log(Number(date));

function evenOdd(num) {
  let value;
  if (num / 2 === 0) {
    value = "even";
  } else {
    value = "odd";
  }
  return value;
}

let result = evenOdd(23);
console.log(result);

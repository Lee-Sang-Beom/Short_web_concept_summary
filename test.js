const obj = { a: 1, b: 2, c: 3 }
const {c, ...rest} = obj;
console.log(rest);

const arr = ["a", "b", "c", "d"]
const [firstElement, ...rest2] = arr
console.log(firstElement) // "a"
console.log(rest2) // ["b", "c", "d"]

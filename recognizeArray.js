// Verify array 1)
var points = new Array(2);
function isArray(x) {
  return console.log(x.constructor.toString().indexOf("Array") > -1)
}
isArray(points)

// Verify array 2)
var points = new Array(2);
console.log(Array.isArray(points))

// Verify array 3)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits instanceof Array);   // returns true

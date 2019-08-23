// funtion currying in es5
function sumES5(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}
// funtion currying in es6
var sumES6 = a => b => c => a + b + c

console.log(sumES5(1)(2)(3))
console.log(sumES6(1)(2)(3))

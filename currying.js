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

/*
Dynamic but temp will be global variable and next time it will have the old value.
var temp = 0
var sum = (a) => {
  if (!isNaN(a)) {
    temp += a
    return sum
  }
}
sum(1)(2)(3)(2)
console.log(temp)
*/

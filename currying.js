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

// ohooo, and the perfect function is given below, enjoy:
var funcCurrying = (...restParam) => {
  var recurFunc = (...restOtherParam) => {
    restParam.push(...restOtherParam)
    /* can also use concat in place of push, but concat doesn'e modify existing array, it returns.
    restParam = restParam.concat(restOtherParam)
    */
    return recurFunc
  }
  recurFunc.toString = () => {
    return restParam.reduce((a,b)=>a+b,0)
  }
  return recurFunc
}

console.log(funcCurrying(1)(2,2)(1,1,1,)(0)()(1,2)(2))
// output:
// 13

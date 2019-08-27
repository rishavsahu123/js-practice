// clear Interval on dynamic time in es5
var i = 1,
  j = 1,
  k = 1;
var interObj = setInterval((function(max) {
  if (i == max) {
    clearInterval(this.interObj)
  }
  console.log(i++)
}).bind(this), 1000, 10)

var interObj1 = setInterval(function(max) {
  if (j == max) {
    clearInterval(window.interObj1)
  }
  console.log(j++)
}, 1000, 1)

// clear Interval on dynamic time in es6
let obj3 = setInterval((max) => {
  if (k == max) {
    clearInterval(this.obj3)
  }
  console.log(k++)
}, 1000, 3)

// output:
// 1
// 1
// 1
// 2
// 2
// 3
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

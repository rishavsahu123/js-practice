/**
 * A solid understanding of functional/block scope,
 * anonymous functions, closures, and IIFE’s will
 * definitely make you a better JavaScript developer
 * and help you out in future interviews.
 */
const arr = [10, 12, 15, 21];
// 1)
for (var i = 0; i < arr.length; i++) {
  var temp = function a() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }
}
temp() // 'Index: 4, element: undefined'

// 2)
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
/**
 * output:
'Index: 4, element: undefined'
'Index: 4, element: undefined'
'Index: 4, element: undefined'
'Index: 4, element: undefined'
 */


//solution of above problem
// 3)
/**
This often confuse people who are new to JavaScript or functional programming. 
It is a result of misunderstanding what closures are. 
A closure does not merely pass the value of a variable or even a reference to the variable.
A closure captures the variable itself!
*/
for (let i = 0; i < arr.length; i++) {
  var temp1 = function a() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }
}
temp1() // 'Index: 3, element: 21'


// 4)
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}

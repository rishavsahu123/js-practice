//fibonacci series using loop
var fibonacci = len => {
  var init = 0,
    sec = 1,
    arr = [0, 1],
    temp;
  if (len == 1) {
    return init
  } else if (len == 2) {
    return arr
  } else if (len > 2) {
    for (let i = 0; i < len - 2; i++) {
      temp = init + sec
      init = sec
      sec = temp
      arr.push(temp)
    }
    return arr
  }
  return 'operation not possible!'
}
console.log(fibonacci(5)) //[0 ,1 ,1 ,2 ,3]
console.log(fibonacci()) //operation not possible!
console.log(fibonacci(0)) //operation not possible!


// fibonacci serries using recursion
function recursFebo (val) {
  if(val == 1){
    return [0]
  }
  else if(val == 2){
    return [0, 1]
  }
  else {
    var arr = recursFebo(val-1)
    arr.push(arr[arr.length-1]+arr[arr.length-2])
    return arr
  }
}
console.log(recursFebo(7)) //[0 ,1 ,1 ,2 ,3 ,5 ,8]

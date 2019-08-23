var arr = [[1, 2, 3, 4], 5, [6, [7, [8]], 9, [10]], [11]]
var flatenArray = (arr) => {
  var flattened = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flatenArray(arr[i]))
    } else {
      flattened = flattened.concat(arr[i])
    }
  }
  return flattened
}

console.log(flatenArray(arr))

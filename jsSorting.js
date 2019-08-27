// JS way to sort array
var arr = [1, 3, 8, 100, 5, 98]

function ascSort(a, b) {
  return a - b; // ascending sort
}

function descSort(a, b) {
  return b - a; // descending sort
}
//for ascending
console.log(arr.sort(ascSort))
console.log(arr.sort((a, b) => a - b))
//for descending
console.log(arr.sort(descSort))
console.log(arr.sort((a, b) => b - a))

// output:
//[1 ,3 ,5 ,8 ,98 ,100]
//[1 ,3 ,5 ,8 ,98 ,100]
//[100 ,98 ,8 ,5 ,3 ,1]
//[100 ,98 ,8 ,5 ,3 ,1]

//can also appy DS soting technique like bubble/merge/quick sort.
var arr = [1, 3, 8, 100, 5, 98]; // we can decalre same variable again only with var, but they both will be same.
//logic of bubble sort
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      arr[i] = arr[i] + arr[j]
      arr[j] = arr[i] - arr[j]
      arr[i] = arr[i] - arr[j]
    }
  }
}
console.log(arr)
// output:
//[1 ,3 ,5 ,8 ,98 ,100]

//String RND, method and properties use.
var x = "Rishav" //literal
var y = new String("Rishav") //create string object
var z = new String("Rishav") //create another object

console.log(typeof(x)) //string
console.log(typeof(y)) //object

console.log(x == y) //true
console.log(x === y) //false

console.log(y == z) //false obj compare will always return false.
console.log(y === z) //false


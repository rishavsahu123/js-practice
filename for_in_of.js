// Good way to iterate over Js object.
var person = { fname: "John", lname: "Doe", age: 25 };
var text = "";
var x;
for (x in person) {
  console.log(x) // fname lname age
  console.log(person[x]) // john Doe 25
}

var person = ['rishav','age','dabra'];
var text = "";
var x;
for (x in person) {
  console.log(x) // '0' '1' '2'
  console.log(person[x]) // 'rishav' 'age' 'dabra'
 }

/** for/of, only work for iterable obj(Arrays, Strings, Maps, NodeLists, and more).
 * Not for key,value pair obj {a:1}
 * it will through error: Uncaught TypeError: person[Symbol.iterator] is not a function
 */
var person = ['rishav','age','dabra'];
var x;
for (x of person) {
  console.log(x) // 'rishav' 'age' 'dabra'
}

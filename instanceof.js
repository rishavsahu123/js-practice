function Person() {
  this.name = "Rishav"
}
class Car {
  constructor(val) {
    this.name = val
  }
}

var temp1 = new Person()
var temp2 = new Car('Bucati')

console.log(temp1 instanceof Person)
console.log(temp2 instanceof Car)
console.log(temp2.name)

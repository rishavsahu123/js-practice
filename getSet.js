class Car {
  constructor() {
    this.t = 'rishav';
  }
}
class Temp extends Car {
  constructor(brand) {
    super()
    this.carname = brand;
  }
  get hello() {
    return this.carname;
  }
  set hello(t) { //param is important
    this.carname = 'sdfsakjdfsdkjf'
  }
}
var t = new Temp('maruti')
t.carname = 'mycar'
console.log(t.hello) //mycar

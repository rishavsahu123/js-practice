/**
 * Created my own trim function (budum)
 * work exactly like trim
 * learing prototype, this will refer temp.
 */
String.prototype.budum = function budum() {
  var firstIndex, lastIndex, dataFound;
  for (let i = 0; i < this.length; i++) {
    if ((this[i] !== ' ') && !dataFound) {
      /**
       * Used dataFound,if spaces not inserted on zero'th position.
       * then firstIndex will be zero
       * and !0 will be true, so it will go again inside the if.
       */
      dataFound = true
      firstIndex = i
    }
    if ((this[this.length - i - 1] !== ' ') && !lastIndex) {
      lastIndex = this.length - i
    }
  }
  return this.substring(firstIndex, lastIndex)
}

var temp = "Hello"
console.log(temp.budum()) //Hello

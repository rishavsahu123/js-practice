// My logic to reverse string
var str = 'Hi RIshav'
var reversedString = ''
for (let i = str.length - 1; i >= 0; i--) {
  reversedString = reversedString + str[i]
}
console.log(reversedString) //'vahsIR iH'

//Another way to reverse string
var str = 'Hi RIshav'
var reversedString = str.split('').reverse().join('')
console.log(reversedString)

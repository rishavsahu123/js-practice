var date = new Date()
console.log(date.getDay()) //0 sunday
console.log(date.getFullYear()) //2019
console.log(date.getMonth()) //7 [0-11] august
console.log(date.getDate()) //25
console.log(date.getHours()) //16 4pm
console.log(date.getMinutes()) // 26
console.log(date.getSeconds()) //37
console.log(date.getMilliseconds()) //604
console.log(date.getTime()) //1566730621144 inmilliseconds
console.log(new Date(1566730621144)) //Sun Aug 25 2019 16:27:01 GMT+0530 (India Standard Time)

var d = new Date(2018, 0, 24, 10, 33, 30, 0);
console.log(d) //Wed Jan 24 2018 10:33:30 GMT+0530 (India Standard Time)

console.log(new Date(0)) //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
console.log(new Date("08/25/2019")) //Sun Aug 25 2019 00:00:00 GMT+0530 (India Standard Time)
console.log(new Date("2019-08-25")) //Sun Aug 25 2019 05:30:00 GMT+0530 (India Standard Time)
console.log(new Date("Aug 25 2019")) //Sun Aug 25 2019 00:00:00 GMT+0530 (India Standard Time)
var date1 = new Date()
console.log(date1) //Sun Aug 25 2019 16:39:14 GMT+0530 (India Standard Time)
date1.setMonth(11)
console.log(date1) //Wed Dec 25 2019 16:39:25 GMT+0530 (India Standard Time)

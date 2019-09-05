console.log(/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test('2h00m32s')) // fasle
console.log(/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test('12:00:32')) // true
console.log(/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test('2:00:32')) // fasle
console.log(/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test('12h00m32s')) // fasle

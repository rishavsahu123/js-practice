// prototype output

var Store = function() {};
Store.prototype.precip = 'rain';
var WinterStorm = function() {};
WinterStorm.prototype.precip = 'snow';
var bob = new WinterStorm();
console.log(bob.precip);

//output:
// 'snow'




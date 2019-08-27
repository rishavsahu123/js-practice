// can you guess output?

console.info(1); //If using infog then, only color will change nothing else
console.log(2);

setTimeout(()=>{
  console.log('should run after 3 millisecond?')
},3);

setTimeout(()=>{
  console.log('should run after 2.9999999 millisecond?')
},2.999999);

// these all will work like zero
setTimeout(()=>{
  console.log('should run after 1.99 millisecond?')
},1.99);
setTimeout(()=>{
  console.log('should run after 1 millisecond?')
},1);
setTimeout(()=>{
  console.log('should run after 0 millisecond?')
},0);
setTimeout(()=>{
  console.log('will run after very early?')
},-127361);
setTimeout(function(){
  console.log('I am here without time')
});
//zero timeout ends here

setTimeout(()=>{
  console.log('should run after 2.000004 millisecond?')
},2.000004);

console.log(3)

// output =>
// 1
// 2
// 3
// 'should run after 1.99 millisecond?'
// 'should run after 1 millisecond?'
// 'should run after 0 millisecond?'
// 'will run after very early?'
// 'I am here without time'
// 'should run after 2.9999999 millisecond?'
// 'should run after 2.000004 millisecond?'
// 'should run after 3 millisecond?'

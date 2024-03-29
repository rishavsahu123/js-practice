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
console.log(2+[2])

// output =>
// 1
// 2
// 3
// "22"
// 'should run after 1.99 millisecond?'
// 'should run after 1 millisecond?'
// 'should run after 0 millisecond?'
// 'will run after very early?'
// 'I am here without time'
// 'should run after 2.9999999 millisecond?'
// 'should run after 2.000004 millisecond?'
// 'should run after 3 millisecond?'

const ramAge = 27;
const rishavAge = 25;
const obj = {
  ramAge,
  rishavAge,
  bhiyao(param) {
    this.ramAge = param
    return this
  }
}
console.log(obj.bhiyao(22).ramAge)

// output:
// 22

const arrToObj = ([key, value]) => ({ [key]: value });
console.log( arrToObj([ 'foo', 'bar' ]) );
// output: { "foo": "bar" }


// NOTE: it will throw error, if won't pass  '={}' in param or {} in argument.
// 'error: Uncaught TypeError: Cannot read property 'userName' of undefined'.
const createUser = ({
  userName = 'Anonymous',
  avatar = 'anon.png'
}={}) => ({
  userName,
  avatar
});
console.log(createUser());
// { userName: "Anonymous", avatar: 'anon.png' }

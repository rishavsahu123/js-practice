function myFunction() {
  var message = 12,
    x = '';
  try {
    if (x == '') throw "is empty"; //throwing manual error
  } catch (err) {
    console.log('inside catch', err) //'inside catch' 'is empty'
  } finally {
    console.log('i will always run') //'i will always run'
  }
}
myFunction()

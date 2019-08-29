function random() {
    let dObj = new Date();
    return dObj.getMilliseconds() % 26
}
console.log(random())

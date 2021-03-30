let counter = 0;
let obj = {
    c: 0
}
function updateCounter() {
    counter = counter + 1;
    obj.c = obj.c + 1;
    console.log('updateCounter', counter)
}
module.exports = {
    counter: counter,
    obj,
    updateCounter: updateCounter
}

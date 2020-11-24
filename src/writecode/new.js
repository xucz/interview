function myNew(fn, ...args) {
    let obj = {};
    obj.__proto__ = fn.prototype;
    fn.apply(obj, args);
    return obj;
}

function Animal(name) {
    this.name = name;
}
let animal = myNew(Animal, 'cat');
console.log(animal.name)  // cat

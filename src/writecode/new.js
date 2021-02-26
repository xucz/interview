function myNew(fn, ...args) {
    let instance = {};
    instance.__proto__ = fn.prototype;
    const res = fn.apply(instance, args);
    if (typeof res === "function" || (typeof res === "object" && res !== null)) {
        return res;
    }
    return instance;
}

function Animal(name) {
    this.name = name;
}
Animal.prototype.say = function () {
    console.log('i am animal')
}
let animal = myNew(Animal, 'cat');
console.log(animal.name)  // cat
animal.say()

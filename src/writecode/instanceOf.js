function myInstanceOf(obj1, obj2) {
    let proto = obj1.__proto__;
    if (proto === null) {
        return obj2 === Object;
    } else  if (proto === obj2.prototype) {
        return true;
    } else {
        return myInstanceOf(proto, obj2.prototype);
    }
}

console.log(myInstanceOf(new String('1'), String));
console.log(myInstanceOf([], String));

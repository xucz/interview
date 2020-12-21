function myInstanceOf(obj1, obj2) {
    let proto = obj1.__proto__;
    if (proto === null) {
        return obj2 === Object;
    } else  if (proto === obj2.prototype) {
        return true;
    } else {
        return myInstanceOf(proto, obj2);
    }
}

function myInstanceOf2(obj1, obj2) {
    let c = obj1.__proto__;
    let p = obj2.prototype;
    while(true) {
        if (c === null) {
            return false;
        } else if (c === p) {
            return true;
        }
        c = c.__proto__;
    }
}

console.log(myInstanceOf(new String('1'), String));
console.log(myInstanceOf([], String));
console.log(myInstanceOf(Object, Object))

function myExtends(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
}


function Person(name) {
    this.name = name;
}

let Student = (function(_Person) {
    myExtends(Student, _Person);
    function Student() {
        return _Person.apply(this, arguments);
    }
    return Student;
})(Person);

let s = new Student('andy');
console.log(s.name);

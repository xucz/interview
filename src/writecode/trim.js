function myTrim(str) {
    str.replace(/^\s+|\s+$/, '');
    return str;
}

console.log(myTrim(' 1 2 3 '));

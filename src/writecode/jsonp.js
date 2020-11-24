function myJsonp(src) {
    let script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
}
function myCallBack(data) {
    console.log(data);
}
myJsonp('http://www.myJsonp.js?callback=myCallBack');

// www.myJsonp.js 返回内容:
// myCallBack('Hello World');

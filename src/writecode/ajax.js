function ajax(url, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url, true);
    xmlHttp.onreadystatechange = function () {
        console.log(xmlHttp.readyState, xmlHttp.status);
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                callback(xmlHttp.responseText);
            } else {
                console.log("服务器返回错误 status = " + xmlHttp.status);
            }
        }
    }
    xmlHttp.send("name=andy&age=20");
    // 取消异步请求
    // xmlHttp.abort();
}
ajax('http://www.baidu.com', (res) => {
    console.log(res)
})

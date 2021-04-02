export function createBrowserHistory() {
    console.log(1122)
    let globalHistory = window.history;
    const listeners = createEvents();
    let location = getPath();
    
    function go(delta) {
        globalHistory.go(delta)
    }
    
    function getPath() {
        return window.location.pathname
    }
    
    function handlePop() {
        listeners.call(getPath())
    }
    
    function push(to, state) {
        let hashChanged = getPath() !== to;
        if (hashChanged) {
            window.history.pushState(null, null, to);
            listeners.call(to)
        }
    }
    
    // 创建和管理listeners的方法
    function createEvents() {
        let handlers = [];
        return {
            push(fn) {
                handlers.push(fn);
                return function () {
                    handlers = handlers.filter(handler => handler !== fn)
                }
            },
            call(arg) {
                handlers.forEach(fn => fn && fn(arg));
            }
        }
    }
    
    // 监听路由变化，不能监听到pushstate，所以pushstate后需要，发布消息
    window.addEventListener('popstate', handlePop);
    
    function createHref(to) {
        console.log(to)
        return to;
    }
    return {
        location,
        go,
        push,
        createHref,
        back() {
            go(-1)
        },
        listen(listener) { // 添加监听
            return listeners.push(listener);
        },
    }
}

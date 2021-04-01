export function createHashHistory() {
    let globalHistory = window.history;
    const listeners = createEvents();
    let location = getHashPath();
    function go(delta) {
        globalHistory.go(delta)
    }
    function getHashPath() {
        const href = window.location.href;
        const hashIndex = href.indexOf('#');
        return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
    }
    function pushHashPath(path) {
        window.location.hash = path;
    }
    function push(to, state) {
        let hashChanged = getHashPath() !== to;
        if (hashChanged) {
        
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
    function handlePop() {
        // 调用回调，传入当前hash
        listeners.call(getHashPath());
    }
    // window.addEventListener('popstate', handlePop);
    window.addEventListener('hashchange', () => {
        handlePop();
    })
    let history = {
        location,
        go,
        back() {
            go(-1)
        },
        listen(listener) { // 添加监听
            return listeners.push(listener);
        },
    }
    
    return history;
}

// 路由核心
// history模式、hash模式

// history 模式
// history.pushState
// history.replaceState
// popstate事件

// hash 模式
// window.location.hash
// onhashchange
export {
    Switch,
    Route,
    Router,
} from '../react-router/index.jsx'

import { useContext } from 'react';
import { RouterContext } from "../react-router/RouterContext.jsx";

export function useHistory() {
    return useContext(RouterContext)
}

export { HashRouter } from "./HashRouter.jsx";
export { Link } from "./Link.jsx";

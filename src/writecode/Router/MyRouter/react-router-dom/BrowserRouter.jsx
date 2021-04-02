import React from 'react';
import { Router } from "../react-router/Router.jsx";
import { createBrowserHistory } from "../history/history.jsx";

/**
 * 功能暂未完成
 * @type {{createHref: *, go: *, back(): void, location: *, push: *, listen(*=): *}}
 */
let history = createBrowserHistory();
export default function (props) {
    return (
        <Router history={history}>{props.children}</Router>
    )
}

import React from 'react';
import { Router } from "../react-router/Router.jsx";
import { createHashHistory } from "../history/history.jsx";

let history = createHashHistory();
export function HashRouter(props) {
    return (
        <Router history={history}>{props.children}</Router>
    )
}

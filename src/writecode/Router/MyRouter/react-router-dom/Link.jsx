import React, {useContext} from 'react'
import {RouterContext} from "../react-router";

export function Link(props) {
    let {history} = useContext(RouterContext);
    let {
        to,
        ...rest
    } = props;
    
    const href = history.createHref(to);
    function link() {
    
    }
    return (
        <a {...rest} href={href} onClick={link} />
    )
}

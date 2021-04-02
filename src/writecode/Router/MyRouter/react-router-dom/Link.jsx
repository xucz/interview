import React, {useContext} from 'react'
import {RouterContext} from "../react-router";

export function Link(props) {
    let {history} = useContext(RouterContext);
    let {
        to,
        onClick,
        ...rest
    } = props;
    
    const href = history.createHref(to);
    let linkProps = {
        ...rest,
        onClick: event => {
            if (onClick) onClick(event);
            // event.preventDefault();
        }
    }
    return (
        <a {...linkProps} href={href} />
    )
}

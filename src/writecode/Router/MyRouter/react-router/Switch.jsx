import React, {useContext} from 'react';
import { RouterContext } from "./RouterContext.jsx";

export function Switch(props) {
    let context = useContext(RouterContext);
    let location = context.location;
    let match, element;
    for (let i = 0; i < props.children.length; i++) {
        let child = props.children[i];
        if (match == null && React.isValidElement(child)) {
            element = child;
            
            const path = child.props.path;
            if (path === location) {
                match = true;
            }
        }
    }
    return (
        <>
            {
                React.cloneElement(element, {
                    location,
                    computedMatch: match
                })
            }
        </>
    )
}

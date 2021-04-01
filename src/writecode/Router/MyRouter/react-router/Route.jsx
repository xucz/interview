import React from 'react';
export function Route(props) {
    return (
        <>
            {
                props.computedMatch && props.children
            }
        </>
    )
}

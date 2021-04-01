import React, { useEffect, useState } from 'react';
import { RouterContext } from './RouterContext.jsx'

export function Router(props) {
    let [location, setLocation] = useState(props.history.location)
    useEffect(() => {
        let unListen = props.history.listen(location => {
            setLocation(location)
        });
        
        return () => unListen();
    }, []);
    return (
        <RouterContext.Provider value={{
            history: props.history,
            location
        }}>
            {props.children}
        </RouterContext.Provider>
    )
}

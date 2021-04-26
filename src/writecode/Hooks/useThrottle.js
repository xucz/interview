import { useRef, useEffect, useCallback } from 'react';

function useThrottle(fn, delay, dep = []) {
    let {current} = useRef({
        fn,
        timer: null
    });
    useEffect(() => {
        current.fn = fn;
    })
    
    return useCallback(function (...args) {
        if(!current.timer) {
            current.timer = setTimeout(function () {
                delete current.timer
            }, delay)
            current.fn.call(this, ...args)
        }
    }, dep)
}

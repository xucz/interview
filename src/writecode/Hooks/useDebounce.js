import { useRef, useEffect, useCallback } from 'react';

function useDebounce(fn, delay, dep = []) {
    let {current} = useRef({fn, timer: null});
    useEffect(function () {
        current.fn = fn;
    }, [fn]);
    return useCallback(function (...args) {
        if (current.timer) {
            clearTimeout(current.timer);
        }
        current.timer = setTimeout(() => {
            current.fn.call(this, ...args);
        }, delay)
    }, dep)
}

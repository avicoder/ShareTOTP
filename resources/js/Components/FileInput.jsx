import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function FileInput({ className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type="file"
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 ' +
                className
            }
            ref={input}
        />
    );
});

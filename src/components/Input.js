import React from 'react'
const Input = (props) => {
    return (
        <input className="new-todo" {...props}
            placeholder="What needs to be done?" />
    )
}
export default Input;
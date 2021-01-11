import React from 'react'
const Input = ({ tasks, setTasks }) => {
    return (
        <input className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={(e) => {
                setTasks(e.target.value)
            }} />
    )
}
export default Input;
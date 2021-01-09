import React, { useState } from 'react'
const Input = () => {
    const [task, setTask] = useState("");
    return (
        <input className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={(e) => {
                setTask(e.target.value)
            }} />
    )
}
export default Input;
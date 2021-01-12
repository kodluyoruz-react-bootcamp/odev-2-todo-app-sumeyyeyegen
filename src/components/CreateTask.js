import React, { useState } from 'react'
import Input from './Input';

function CreateTask({ newTodoHandler, completeAllTasks }) {
    const [task, setTask] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        newTodoHandler(task);
        setTask('');
    };


    return (
        <form onSubmit={submitHandler}>
            <Input type="text" autoFocus value={task} onChange={(e) => { setTask(e.target.value) }} />
        </form>
    )
}

export default CreateTask

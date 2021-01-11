import React from 'react'
import Input from './Input';

function CreateTask({ onChange, tasks, setTasks }) {
    function onSubmit(e) {
        e.preventDefault();
        onChange(e.target[0].value);
        e.target[0].value = "";
    }


    return (
        <form onSubmit={onSubmit}>
            <Input tasks={tasks} setTasks={setTasks} />
        </form>
    )
}

export default CreateTask

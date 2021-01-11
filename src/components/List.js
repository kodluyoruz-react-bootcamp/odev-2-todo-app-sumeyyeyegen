import React from 'react'
import Task from "./Task"

function List({ tasks, onChange, setTask }) {
    function handleSetList(id, isChecked) {
        if (isChecked !== undefined)
            changedChecked(id, isChecked)
        else
            removeList(id)
    }

    function removeList(id) {
        tasks.splice(id, 1)
        setTask(tasks);
        onChange(tasks);
    }

    function changedChecked(id, isChecked) {
        tasks[id].checked = isChecked;
        onChange(tasks);
    }
    return (
        <ul className="todo-list">
            {tasks.map((task, index) =>
                <Task key={index} id={index} checked={task.checked} task={task.name} onChange={handleSetList} />
            )}
        </ul>

    )
}

export default List

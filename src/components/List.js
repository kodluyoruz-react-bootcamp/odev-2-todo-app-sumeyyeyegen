import React from 'react'

import Task from "./Task"
import { useState, useEffect } from "react"

function List({ tasks, onChange }) {
    const [list, setList] = useState(tasks)

    function handleSetList(id, isChecked) {
        if (isChecked !== undefined)
            changedChecked(id, isChecked)
        else
            removeList(id)
    }

    function removeList(id) {
        list.splice(id, 1)
        setList(list);
        onChange(list);
    }

    function changedChecked(id, isChecked) {
        list[id].checked = isChecked;
        onChange(list);
    }

    useEffect(() => {
        setList(tasks)
    }, [tasks])

    return (
        <ul className="todo-list">
            {list.map((task, index) =>
                <Task key={index} id={index} checked={task.checked} task={task.name} onChange={handleSetList} />
            )}
        </ul>

    )
}

export default List

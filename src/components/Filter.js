
import ClearButton from './ClearButton'
import FilterButton from './FilterButton'
import { useState, useEffect } from "react"

function Filter({ tasks, onChange, setTask }) {
    useEffect(() => {
        setTask(tasks)
    })

    function handleChange(filter) {
        onChange(filter)
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{tasks.filter(t => !t.checked).length}</strong> items left
            </span>
            <ul className="filters">
                <li>
                    <FilterButton selected="selected" name="All" onChange={handleChange} />
                </li>
                <li>
                    <FilterButton name="Active" onChange={handleChange} />
                </li>
                <li>
                    <FilterButton name="Completed" onChange={handleChange} />
                </li>
            </ul>

            <ClearButton />
        </footer>
    )
}

export default Filter

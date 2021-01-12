import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

function List({ tasks, category, updateTaskHandler, deleteTaskHandler }) {
    const [lists, setList] = useState([]);
    useEffect(() => {
        if (category === "Active")
            setList(tasks.filter((task) => !task.checked));
        else if (category === "Completed")
            setList(tasks.filter((task) => task.checked));
        else setList(tasks);
    }, [tasks, category, updateTaskHandler, deleteTaskHandler]);

    return (
        <ul className="todo-list">
            {lists.map((task) => (
                <ListItem
                    key={task.id}
                    task={task}
                    checkboxHandler={updateTaskHandler}
                    deleteTaskHandler={deleteTaskHandler}
                />
            ))}
        </ul>
    );
}

export default List;
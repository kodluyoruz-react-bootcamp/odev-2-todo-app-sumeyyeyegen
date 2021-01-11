import React from 'react'
import ListItem from "./ListItem"

function List({ tasks, category, updateTaskHandler, deleteTaskHandler }) {

    let lists = tasks.map((task) => (
        <ListItem
            key={task.id}
            task={task}
            checkboxHandler={updateTaskHandler}
            deleteTaskHandler={deleteTaskHandler} />
    ));

    if (category === "Active") {
        lists = tasks
            .filter(task => !task.checked)
            .map(task => (
                <ListItem
                    key={task.id}
                    task={task}
                    checkboxHandler={updateTaskHandler}
                    deleteTaskHandler={deleteTaskHandler}
                />
            ));
    }

    if (category === "Completed") {
        lists = tasks
            .filter(task => task.checked)
            .map(task => (
                <ListItem
                    key={task.id}
                    task={task}
                    checkboxHandler={updateTaskHandler}
                    deleteTaskHandler={deleteTaskHandler}
                />
            ));
    }

    return (
        <ul className="todo-list">
            {lists}
        </ul>

    )
}

export default List

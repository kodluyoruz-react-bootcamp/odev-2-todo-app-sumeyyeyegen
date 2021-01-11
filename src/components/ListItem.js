import React from 'react'
import styles from '../assets/css/ListItem.module.css';
import '../assets/css/index.css';

function ListItem({ task, checkboxHandler, deleteTaskHandler }) {
    return (
        <li>
            <div className="view">
                {
                    task.checked ?
                        (
                            <input
                                className="toggle"
                                type="checkbox"
                                onChange={(e) => checkboxHandler(task.id, e.target.checked)}
                                checked
                            />
                        ) :
                        (
                            <input
                                type="checkbox" className="toggle"
                                onChange={(e) => checkboxHandler(task.id, e.target.checked)}
                            />
                        )
                }
                <label className={`${task.checked && styles.lineThrough}`}> {task.title}</label >
                <button className="destroy" onClick={() => deleteTaskHandler(task.id)}></button>
            </div>
        </li >
    )
}

export default ListItem

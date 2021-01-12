import React, { useEffect, useState } from "react";

function Filter({ tasks, clearCompletedTasks, categoryHandler }) {
    const [taskNum, setTaskNum] = useState(0);
    useEffect(() => {
        tasks.forEach((a) => {
            if (a.isCompleted === false) {
                setTaskNum(taskNum + 1);
            }
        });
    }, [setTaskNum, taskNum, tasks]);
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{taskNum}</strong> items left
            </span>
            <ul className="filters">
                <li>
                    <a
                        href="true"
                        name="All"
                        onClick={(e) => {
                            e.preventDefault();
                            categoryHandler("All");
                        }}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        href="true"
                        name="Active"
                        onClick={(e) => {
                            e.preventDefault();
                            categoryHandler("Active");
                        }}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a
                        href="true"
                        name="Completed"
                        onClick={(e) => {
                            e.preventDefault();
                            categoryHandler("Completed");
                        }}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            <button className="clear-completed" onClick={clearCompletedTasks}>
                Clear completed
            </button>
        </footer>
    );
}

export default Filter;

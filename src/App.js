
import './App.css';

import Title from "./components/Title"
import CreateTask from "./components/CreateTask"
import List from "./components/List"
import Footer from "./components/Footer"
import Filter from './components/Filter';
import { useState } from "react"

const taskList = [
  { id: 1, title: "Kitap oku", checked: true },
  { id: 2, title: "Spor yap", checked: false },
  { id: 3, title: "Film izle", checked: false },
  { id: 4, title: "Markete git", checked: true }
]
function App() {
  const [tasks, setTasks] = useState([...taskList]);
  const [category, setCategory] = useState('All');

  const categoryHandler = (category) => {
    setCategory(category);
  }
  function addTask(task) {
    setTasks([...tasks, {
      id: tasks.length + 1,
      title: task,
      checked: false
    }])
  }
  const updateTask = (id, checked) => {
    const getIndex = tasks.findIndex(task => task.id === id);
    const updatedTasks = [...tasks];
    updatedTasks[getIndex].checked = checked;
    setTasks(updatedTasks);
  }
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }
  const completeAllTasks = () => {
    const completedTasks = tasks.map(task => ({
      ...task,
      checked: !task.checked
    }));
    setTasks(completedTasks);
  }
  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.checked);
    setTasks(updatedTasks);
  };

  return (
    <div>
      {console.log(tasks)}
      <section className="todoapp">
        <header className="header">
          <Title title="tasks" />
          <CreateTask placeholder="What needs to be done?"
            newTodoHandler={addTask}
            completeAllTasks={completeAllTasks} />
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <List tasks={tasks} category={category}
            updateTaskHandler={updateTask} deleteTaskHandler={deleteTask} />
          <Filter tasks={tasks}
            clearCompletedTasks={clearCompletedTasks}
            categoryHandler={categoryHandler} />
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default App;
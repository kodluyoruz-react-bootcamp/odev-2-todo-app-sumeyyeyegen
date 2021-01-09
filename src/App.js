
import './App.css';

import Title from "./components/Title"
import CreateTask from "./components/CreateTask"
import List from "./components/List"
import Footer from "./components/Footer"
import Filter from "./components/Filter"
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState([
    { name: "Kitap oku", checked: true },
    { name: "Spor yap", checked: false },
    { name: "Film izle", checked: false },
    { name: "Markete git", checked: true },
  ]);

  function handleChange(task) {
    setTasks([...tasks, { completed: "", name: task }]);
  }

  function setTask(list) {
    setTasks([...list]);
  }
  function filterChange(x) {
    console.log("tasks", tasks)
    var list = tasks;
    if (x === "All") {
      setTasks([...list]);
      return;
    }
    if (x === "Active")
      list = tasks.filter(t => !t.checked);
    if (x === "Completed")
      list = tasks.filter(t => t.checked);
    setTasks([...list]);
  }

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <Title title="tasks" />
          <CreateTask placeholder="What needs to be done?" onChange={handleChange} />
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <List tasks={tasks} onChange={(list) => setTask(list)} />
          <Filter tasks={tasks} onChange={(item) => filterChange(item)} />
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default App
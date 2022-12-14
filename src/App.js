import React, { useState, useEffect } from "react";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import Visibility from "./components/Visibility";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, SetShowCompleted ] = useState(false);

  const createTask = (taskName) => { 
    if (!tasksItems.find(t => t.name === taskName)){
     setTasksItems([...tasksItems, {name: taskName, done: false}])}
   };

   const deleteTask = () => { 
    setTasksItems(tasksItems.filter(t => !t.done))
    SetShowCompleted(false)
    };

   const toggleTask = (task) => { 
    setTasksItems(tasksItems.map(t => (t.name == task.name) ? {...t, done: !t.done} :t ))
    };

   useEffect(()=> {
    let data = localStorage.getItem('tasks')
    if(data) {
        setTasksItems(JSON.parse(data))
    }
   }, [])

   useEffect(() => { 
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
   }, [tasksItems])
   

  return (
    <div>
      <h1>New</h1>
      <TaskCreator createNewTask={createTask}/>
      <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>
      <Visibility isChecked={showCompleted} deleteTask={deleteTask} SetShowCompleted={checked => SetShowCompleted(checked)}/>
      {
        showCompleted  && (<TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/>)
      }
    </div>
  );
}

export default App;

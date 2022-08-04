import React, { useState } from "react";

const TaskCreator = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState("");

  const inputChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTaskName}
        placeholder="enter a new task"
        onChange={inputChange}
      />
      <button>Save</button>
    </form>
  );
};

export default TaskCreator;

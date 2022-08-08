import React from 'react'
import TaskRow from './TaskRow'

const TaskTable = ({tasks, toggleTask, showCompleted = false }) => {

const taskTableRow = (doneValue) => { 
    return (tasks
        .filter( t => t.done === doneValue)
        .map( t => ( <TaskRow task={t} key={t.name} toggleTask={toggleTask}/>))
        
        )
 };

  return (
    <table>
        <thead>
          <tr>
            <th>Tasks:</th>
          </tr>
        </thead>
        <tbody>
         {taskTableRow(showCompleted )}
        </tbody>
      </table>
  )
}

export default TaskTable
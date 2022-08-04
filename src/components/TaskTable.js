import React from 'react'
import TaskRow from './TaskRow'

const TaskTable = ({tasks, toggleTask}) => {
  return (
    <table>
        <thead>
          <tr>
            <th>Tasks:</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => ( <TaskRow task={t} key={t.name} toggleTask={toggleTask}/>
            
          ))}
        </tbody>
      </table>
  )
}

export default TaskTable
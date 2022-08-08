import React from 'react'

const Visibility = ({isChecked,SetShowCompleted,deleteTask}) => {

    const handleDelete = () => { 
        if (window.confirm('are u sure?'))
        deleteTask()
     };
  return (
    <div>
        <input
         type="checkbox"
         checked={isChecked} 
         onChange={ e => SetShowCompleted(e.target.checked)}
         />

         <label> Click to Show Done Tasks </label>

         <button onClick={handleDelete}>
            Delete Done Task
         </button>
    </div>
  )
}

export default Visibility
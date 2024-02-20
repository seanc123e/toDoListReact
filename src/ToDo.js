import React from 'react'
import "./ToDo.css"

function ToDo() {
  return (
    <div className='toDoContainer'>
        <h1 className='toDoTitle'>To-Do</h1>
            <div className='taskInputContainer'>
                <label className='taskInputLabel'>
                    <input name='taskInput' className='taskInput' placeholder='What do you have to do today?'></input>
                </label>
                <button className='taskInputBtn'>+</button>
            </div>
    </div>

    

  )
}

export default ToDo

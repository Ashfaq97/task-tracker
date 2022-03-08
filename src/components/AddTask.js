import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task!')
            return
        }

        onAdd({ text, reminder })

        setText('')
        setReminder(false)

    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control' >
            <label>Task</label>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Task'></input>
        </div>
        <div className='form-control form-control-check' >
            <label>Set reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>

        <input className='btn btn-block' type='submit' value='Save Task' ></input>
    </form>
  )
}

export default AddTask;

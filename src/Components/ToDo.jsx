import React, { useState } from 'react'

import List from './list'
import Form from './form'

const ToDo = () => {
    
    const [tasks, setTodo] = useState([])

    const newTask = task => setTodo(allTasks => [...allTasks, task])

    return (
        <>
            <Form newTask={ task => newTask(task) } />
            <List todo={ tasks } />
        </>
    )
}

export default ToDo
import React, { useState } from 'react'

const Form = ({ newTask }) => {

    const [input, setInput] = useState('')

    const changeInput = event => setInput(event.target.value)

    const sendNewTask = () => {
        newTask(input)
        setInput('')
    }
    
    return (
        <>
            <input onChange={ changeInput } type="text" value={ input } />
            <button type="submit" onClick={ sendNewTask } >Go!</button>
            <h1>{ input }</h1>
        </>
    )
}

export default Form
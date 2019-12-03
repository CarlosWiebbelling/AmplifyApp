import React from 'react'

const List = ({ todo }) => {

    const render = () =>
        todo.map((element, index) => 
            <div key={ index }>
                <h5>{ element }</h5>
            </div>
        )
    
    return todo.length > 0 ? render() : <h5>Nothing to show!</h5>
}

export default List
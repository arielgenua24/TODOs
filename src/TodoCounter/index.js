import React from 'react';
import {TodoContext} from '../TodoContext'

function TodoCounter() {
    const {todos} = React.useContext(TodoContext)
    
    return (
        <h2 className="TodoCounter">Te quedan {todos.length} TODOs</h2>
    );
}

export {TodoCounter};
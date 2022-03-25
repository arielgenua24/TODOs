import React from 'react';
import {TodoContext} from '../TodoContext'

function TodoCounter() {
    const {todos} = React.useContext(TodoContext)
    
}

export {TodoCounter};
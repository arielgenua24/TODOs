import React from 'react';

function TodoCounter({todos}) {
    return (
        <h2 className="TodoCounter">Te quedan {todos} TODOs</h2>
    );
}

export {TodoCounter};
import React from "react";

function TodoList(props) {
    return(
        <section className="todoList-section">  
            {props.children}

        </section>
    )
}

export { TodoList }
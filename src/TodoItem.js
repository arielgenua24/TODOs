import React  from "react";

function TodoItem(props){
    return(
        <section className="TodoItem-section">
            <p>
              Esta es una TODO {props.text}
            </p>
        </section>
            

    )
}

export {TodoItem};
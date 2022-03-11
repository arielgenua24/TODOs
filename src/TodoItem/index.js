import React  from "react";

function TodoItem(props){
    
    
    return(

        <section className="TodoItem-section">
            <span 
            className='Todoitem-span Todoitem-span2'
            onClick={props.onComplete}
            >c
            </span>
            <p>
              {props.text}
            </p>

            

        <img src={props.image} alt="UserImage"></img>

        </section>
            

    )
}

export {TodoItem};
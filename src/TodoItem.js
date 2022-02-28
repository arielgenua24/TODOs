import React  from "react";

function TodoItem(props){
    
    let aqio = () => {
        alert('aqui completamos ' + props.text)
    } 
    
    
    return(

        <section className="TodoItem-section">
            <span 
            className='Todoitem-span Todoitem-span2'
            onClick={props.onComplete}
            >c
            </span>

                <p>
                Esta es una TODO {props.text}
                </p>

            <span
            className='Todoitem-span Todoitem-span2'
            onClick={() => {aqio()}}
            >x
            </span>
        </section>
            

    )
}

export {TodoItem};
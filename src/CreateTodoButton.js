import React from "react";

function CreateTodoButton(){
    const onClickButton = (msg) => {
        alert(msg)
    }

    return(
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('the message')}
        >
        +   
        </button>
    )


}
export {CreateTodoButton}
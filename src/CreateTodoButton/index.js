import React from "react";
import { TodoContext } from "../TodoContext";
import './todoButton.css'

function CreateTodoButton(props){
    const {openModal,setOpenModal} = React.useContext(TodoContext);
   
    const onClickButton = () => {
       setOpenModal(prevState => !prevState)
    }

    

    return(
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton()}
        >
        +   
        </button>
    )


}
export {CreateTodoButton}
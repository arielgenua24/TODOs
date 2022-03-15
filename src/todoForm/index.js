import React from "react";
import {TodoContext} from '../TodoContext'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {addTodos,setOpenModal} = React.useContext(TodoContext)
    const [interest,setInterest] = React.useState('Otros')
    const [image,setImage] = React.useState('')
    let userInterest ;




    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    /*const changeBckgByValue = (interestIn) => {
        console.log('vegetta')
        console.log(interestIn)
        console.log(interest)

        console.log(interest === interestIn) 
        let section = document.getElementsByClassName("TodoItem-section")
        if(interestIn === 'Nintendo') {
            section.style.backgroundColor = "red";
        } else {
            section.style.backgroundColor = "black";
        } 
   } */



    const onSubmit = (event) => {
        event.preventDefault();
        addTodos(newTodoValue,interest,image)
        setOpenModal(false)

        console.warn("all data", image)
    }

   


    return (
        <>
            <form onSubmit={onSubmit}>
                <label>...</label>
                
                <textarea 
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder="Escriba aqui"
                />

                <select onChange={(e)=>{
                    userInterest = e.target.value;
                    setInterest(userInterest);
                }}>
                    <option value='otros'selected>Otros</option>
                    <option value='Nintendo' >Nintendo</option>
                    <option value='Playstation'>Playstation</option>
                    <option value='Xbox'>Xbox</option>
                    
                </select>

                <input 
                    value={image} 
                    placeholder="ej https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8XGEPtD1xoasK0FYkYNcCn1z.png" 
                    onChange={(e)=>
                    { const newGameImage = e.target.value;
                    setImage(newGameImage) }
                }> 
                </input>

                <div>
                    <button
                        type="button"
                        onCancel={onCancel}
                    >
                        cancelar
                    </button>
                    <button
                        type="submit"
                    >
                        
                        añadir
                    </button>
                </div>

               
                    

            </form>
            

        </>
        
    )
}

export {TodoForm}




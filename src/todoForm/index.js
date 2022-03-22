import React from "react";
import {TodoContext} from '../TodoContext'
import './todoFrom.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {addTodos,setOpenModal} = React.useContext(TodoContext)
    const [interest,setInterest] = React.useState('Otros')
    const [image,setImage] = React.useState('')
    const [opinion, setOpinion] = React.useState('')
    const [category, setCategory] = React.useState('Accion')
    const [choice,setChoice] = React.useState('')

    let userInterest ;
    let userCategory ;
    let userChoice;




    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const setNewOpinion = (event) => {
        setOpinion(event.target.value)
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
        addTodos(newTodoValue,interest,image,opinion,category,choice)
        setOpenModal(false)

        console.warn("all data", image)
    }

   


    return (
        <>
            <form 
                className="form-1"
                onSubmit={onSubmit}>
                <label>...</label>
                
                <textarea 
                    className="form__textArea-1"
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder="Titulo del juego"
                />

                <textarea 
                    className="form-textArea-2"
                    value={opinion}
                    onChange={setNewOpinion}
                    placeholder="Opinion del juego"
                />


                <select className="form__select1" onChange={(e)=>{
                    userInterest = e.target.value;
                    setInterest(userInterest);
                }}>
                    <option value='otros'selected>Otros</option>
                    <option value='Nintendo' >Nintendo</option>
                    <option value='Playstation'>Playstation</option>
                    <option value='Xbox'>Xbox</option>
                    
                </select>

               

                <select className="form-select2" onChange={(e)=>{
                    userCategory = e.target.value;
                    setCategory(userCategory)
                   
                }}>
                    <option value='Accion'selected>Accion</option>
                    <option value='Aventura' >Aventura</option>
                    <option value='Battle Royale'>Battle Royale</option>
                    <option value='Carreras'>Carreras</option>
                    <option value='Deportes'>Deportes</option>
                    <option value='Shooting'>Shooting</option>
                    <option value='Estrategia'>Estrategia</option>
                    <option value='Multiplayer'>Multiplayer</option>
                    <option value='RPG'>RPG</option>
                    <option value='ROL'>ROL</option>
                    <option value='Sigilo'>Sigilo</option>
                    <option value='Simulacion'>Simulacion</option>
                    <option value='Supervivencia'>Supervivencia</option>
                    <option value='Terror'>Terror</option>
                    <option value='Sandbox'>Sandbox</option>
                    <option value='Survival horror'>Survival horror</option>
                    <option value='Old school'>Old school</option>
                    
                </select>

                <select className="form__select3" onChange={(e)=>{
                    userChoice = e.target.value;
                    setChoice(userChoice);
                }}>
                    <option value='Debo jugar'selected>Debo jugar</option>
                    <option value='Jugados' >Jugados</option>

                </select>


                <input
                    className="form_input1" 
                    value={image} 
                    placeholder="ej https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8XGEPtD1xoasK0FYkYNcCn1z.png" 
                    onChange={(e)=>
                    { const newGameImage = e.target.value;
                    setImage(newGameImage) }
                }> 
                </input>



                <div className="div_buttons">
                    <button
                        className="button__cancelar"
                        type="submit"
                        onClick={onCancel}
                    >
                        cancelar
                    </button>
                    <button
                        className="button__submit"
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



